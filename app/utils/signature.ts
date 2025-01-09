import * as nodeCrypto from 'crypto';
import invariant from 'tiny-invariant';
import { canUseDOM } from './can-use-dom';

const SECRET = canUseDOM() ? import.meta.env.VITE_SIGN_SECRET : process.env.VITE_SIGN_SECRET;
invariant(SECRET, 'SECRET must be set.');

// 签名有效期（毫秒）
const SIGNATURE_EXPIRATION = 5 * 60 * 1000; // 5分钟

// 将字符串转换为 Uint8Array
function str2ab(str: string): Uint8Array {
  const encoder = new TextEncoder();
  return encoder.encode(str);
}

// 将 ArrayBuffer 转换为十六进制字符串
function ab2hex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// 浏览器端使用 Web Crypto API
async function generateSignatureInBrowser(payload: any): Promise<string> {
  // 检查是否在安全上下文中
  if (!window.isSecureContext) {
    throw new Error('Web Crypto API 需要安全上下文 (HTTPS 或 localhost)');
  }

  // 检查 crypto.subtle 是否可用
  if (!crypto.subtle) {
    throw new Error('当前环境不支持 Web Crypto API');
  }

  const data = JSON.stringify(payload);
  const encoder = new TextEncoder();
  const keyData = encoder.encode(SECRET);

  try {
    // 从密钥数据创建 CryptoKey
    const key = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);

    // 生成签名
    const signature = await crypto.subtle.sign('HMAC', key, str2ab(data));
    return ab2hex(signature);
  } catch (error) {
    console.error('生成签名时发生错误:', error);
    throw error;
  }
}

// 服务端使用 Node.js crypto
function generateSignatureInNode(payload: any): string {
  return nodeCrypto.createHmac('sha256', SECRET).update(JSON.stringify(payload)).digest('hex');
}

// 带时间戳的载荷类型
interface TimestampedPayload<T = any> {
  data: T;
  timestamp?: number;
}

// 根据运行环境选择合适的签名方法
export async function generateSignature(payload: any, timestamp?: number): Promise<string> {
  const timestampedPayload: TimestampedPayload = {
    data: payload,
    timestamp,
  };

  if (canUseDOM()) {
    return generateSignatureInBrowser(timestampedPayload);
  }
  return generateSignatureInNode(timestampedPayload);
}

// 验证签名
export async function verifySignature(timestampedPayload: TimestampedPayload, signature: string): Promise<boolean> {
  const currentTime = Date.now();

  // 检查时间戳是否存在
  if (timestampedPayload.timestamp) {
    const timeDiff = Math.abs(currentTime - timestampedPayload.timestamp);
    if (timeDiff > SIGNATURE_EXPIRATION) {
      console.warn('签名验证失败：时间戳过期');
      return false;
    }
  }

  try {
    const expectedSignature = await generateSignature(timestampedPayload.data, timestampedPayload.timestamp);
    return expectedSignature === signature;
  } catch (error) {
    console.error('签名验证失败：', error);
    return false;
  }
}

// API 请求签名验证中间件
export async function validateRequestSignature(request: Request): Promise<boolean> {
  const signature = request.headers.get('X-Signature');
  const timestamp = request.headers.get('X-Timestamp');

  if (!signature || !timestamp) {
    console.warn('签名验证失败：缺少签名或时间戳');
    return false;
  }

  try {
    const body = await request.clone().json();
    const timestampedPayload: TimestampedPayload = {
      data: body,
      timestamp: parseInt(timestamp, 10),
    };

    return await verifySignature(timestampedPayload, signature);
  } catch (error) {
    console.error('签名验证失败：', error);
    return false;
  }
}
