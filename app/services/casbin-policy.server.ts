import { createEnforcer } from './casbin-enforcer.server';
import fs from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const POLICY_PATH = join(__dirname, '../assets/casbin-policy.csv');

export async function updatePolicy(policyContent: string): Promise<boolean> {
  try {
    await fs.writeFile(POLICY_PATH, policyContent, 'utf-8');
    const enforcer = await createEnforcer();
    await enforcer.loadPolicy();
    return true;
  } catch (error) {
    console.error('Failed to update policy:', error);
    return false;
  }
}

export async function getPolicyContent(): Promise<string> {
  return fs.readFile(POLICY_PATH, 'utf-8');
}
