/** 校验签名 */
const validateSignature = async (request: Request) => {
  if (request.method !== 'POST') {
    return json({ message: 'Method not allowed' }, 405);
  }

  const payload = await request.json();
  const signature = request.headers.get('X-Hub-Signature-256');
  const generatedSignature = `sha256=${crypto
    .createHmac('sha256', process.env.GITHUB_WEBHOOK_SECRET)
    .update(JSON.stringify(payload))
    .digest('hex')}`;

  if (signature !== generatedSignature) {
    return json({ message: 'Signature mismatch' }, 401);
  }

  return json({ success: true }, 200);
};

export { validateSignature };
