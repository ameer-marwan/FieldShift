import { cp, mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'web-dist');
await mkdir(output, { recursive: true });
await cp(resolve(root, 'dist'), output, { recursive: true });

// Preserve existing URLs for anyone who needs the downloadable single-file edition.
execFileSync(process.execPath, [resolve(root, 'scripts/package-final.mjs')], { cwd: root, stdio: 'inherit' });
await cp(resolve(root, 'release/FieldShift-Final.html'), resolve(output, 'FieldShift-Final.html'));
