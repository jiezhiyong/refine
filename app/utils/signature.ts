import { hmac } from '@noble/hashes/hmac';
import { sha256 } from '@noble/hashes/sha256';
import { bytesToHex } from '@noble/hashes/utils';
import invariant from 'tiny-invariant';

import { TAny } from '~/types';

import { canUseDOM } from './can-use-dom';

const SECRET = canUseDOM() ? import.meta.env.VITE_SECRET : process.env.VITE_SECRET;
invariant(SECRET, 'VITE_SECRET must be set.');

// 签名有效期（毫秒）
const SIGNATURE_EXPIRATION = 5 * 60 * 1000; // 5分钟

// 生成签名
function generateSignatureSync(payload: TAny): string {
  const data = JSON.stringify(payload);
  const signature = hmac(sha256, SECRET, data);
  return bytesToHex(signature);
}

// 带时间戳的载荷类型
interface TimestampedPayload<T = TAny> {
  data: T;
  timestamp?: number;
}

// 生成带时间戳的签名
async function generateSignature(payload: TAny, timestamp?: number): Promise<string> {
  const timestampedPayload: TimestampedPayload = {
    data: payload,
    timestamp: timestamp || Date.now(),
  };
  return generateSignatureSync(timestampedPayload);
}

// 验证签名
async function verifySignature(timestampedPayload: TimestampedPayload, signature: string): Promise<boolean> {
  // 检查时间戳是否有效
  if (timestampedPayload.timestamp) {
    const now = Date.now();
    if (now - timestampedPayload.timestamp > SIGNATURE_EXPIRATION) {
      return false;
    }
  }

  const expectedSignature = generateSignatureSync(timestampedPayload);
  return signature === expectedSignature;
}

// API 请求签名验证中间件
async function validateRequestSignature(request: Request): Promise<boolean> {
  const signature = request.headers.get('x-signature');
  if (!signature) {
    return false;
  }

  try {
    const body = await request.clone().json();
    return verifySignature(body, signature);
  } catch (error) {
    console.error('Failed to validate signature:', error);
    return false;
  }
}

export { generateSignature, verifySignature, validateRequestSignature };
