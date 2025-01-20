import { newEnforcer } from 'casbin';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const MODEL_PATH = join(__dirname, '../assets/casbin-model.conf');
const POLICY_PATH = join(__dirname, '../assets/casbin-policy.csv');

export async function createEnforcer() {
  return newEnforcer(MODEL_PATH, POLICY_PATH);
}
