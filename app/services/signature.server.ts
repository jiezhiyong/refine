import { data } from '@remix-run/node';
import crypto from 'crypto';

// 校验签名 - webhook api
export const validateSignature = async (request: Request) => {
  if (request.method !== 'POST') {
    return data({ message: 'Method not allowed' }, 405);
  }

  const payload = await request.json();
  const signature = request.headers.get('signature');
  const generatedSignature = `sha256=${crypto
    .createHmac('sha256', process.env.WEBHOOK_SECRET || '')
    .update(JSON.stringify(payload))
    .digest('hex')}`;

  if (signature !== generatedSignature) {
    return data({ message: 'Signature mismatch' }, 401);
  }

  return data({ success: true }, 200);
};
