import { spawn } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(fileURLToPath(new URL('../', import.meta.url)));

function resolveFromProject(...segments) {
  return path.resolve(projectRoot, ...segments);
}

function normalizeEntry(entry) {
  return path.isAbsolute(entry) ? entry : resolveFromProject(entry);
}

function findEntries(dir) {
  if (!existsSync(dir)) return [];

  const entries = [];
  for (const item of readdirSync(dir)) {
    const itemPath = path.join(dir, item);
    const stats = statSync(itemPath);

    if (stats.isDirectory()) {
      entries.push(...findEntries(itemPath));
      continue;
    }

    if (item === 'index.js') {
      entries.push(itemPath);
    }
  }

  return entries;
}

function getEntryFromVercelBuildResult() {
  const resultPath = resolveFromProject('.vercel/react-router-build-result.json');
  if (!existsSync(resultPath)) return undefined;

  const result = JSON.parse(readFileSync(resultPath, 'utf8'));
  const bundles = Object.values(result.buildManifest?.serverBundles ?? {});
  const entries = bundles
    .map((bundle) => bundle?.file)
    .filter((file) => typeof file === 'string')
    .map(normalizeEntry)
    .filter(existsSync);

  if (entries.length === 1) {
    return entries[0];
  }

  if (entries.length > 1) {
    throw new Error(
      `Multiple server entries found in .vercel/react-router-build-result.json:\n${entries
        .map((entry) => `- ${path.relative(projectRoot, entry)}`)
        .join('\n')}\nSet REACT_ROUTER_SERVER_ENTRY to choose one.`,
    );
  }

  return undefined;
}

function getServerEntry() {
  if (process.env.REACT_ROUTER_SERVER_ENTRY) {
    const entry = normalizeEntry(process.env.REACT_ROUTER_SERVER_ENTRY);
    if (existsSync(entry)) return entry;
    throw new Error(`REACT_ROUTER_SERVER_ENTRY does not exist: ${entry}`);
  }

  const defaultEntry = resolveFromProject('build/server/index.js');
  if (existsSync(defaultEntry)) return defaultEntry;

  const vercelEntry = getEntryFromVercelBuildResult();
  if (vercelEntry) return vercelEntry;

  const entries = findEntries(resolveFromProject('build/server'));
  if (entries.length === 1) {
    return entries[0];
  }

  if (entries.length > 1) {
    throw new Error(
      `Multiple server entries found under build/server:\n${entries
        .map((entry) => `- ${path.relative(projectRoot, entry)}`)
        .join('\n')}\nSet REACT_ROUTER_SERVER_ENTRY to choose one.`,
    );
  }

  throw new Error('No React Router server entry found. Run `pnpm run build` first.');
}

const serverEntry = getServerEntry();
const child = spawn('react-router-serve', [serverEntry], {
  cwd: projectRoot,
  env: {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV ?? 'production',
  },
  shell: process.platform === 'win32',
  stdio: 'inherit',
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});
