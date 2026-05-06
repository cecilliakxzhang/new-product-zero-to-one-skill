#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const skillRoot = path.resolve(__dirname, '..');
const templateRoot = path.join(skillRoot, 'assets', 'product-starter');

const args = process.argv.slice(2);
const targetArg = args.find((arg) => !arg.startsWith('--'));
const force = args.includes('--force');
const dryRun = args.includes('--dry-run');

if (!targetArg) {
  console.error('Usage: node init-product-docs.mjs <project-root> [--force] [--dry-run]');
  process.exit(1);
}

const targetRoot = path.resolve(process.cwd(), targetArg);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return walk(fullPath);
    }
    return [fullPath];
  });
}

const templateFiles = walk(templateRoot);
const created = [];
const skipped = [];
const overwritten = [];

for (const source of templateFiles) {
  const relativePath = path.relative(templateRoot, source);
  const target = path.join(targetRoot, relativePath);
  const exists = fs.existsSync(target);

  if (exists && !force) {
    skipped.push(relativePath);
    continue;
  }

  if (!dryRun) {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(source, target);
  }

  if (exists) {
    overwritten.push(relativePath);
  } else {
    created.push(relativePath);
  }
}

console.log(JSON.stringify({ targetRoot, dryRun, force, created, overwritten, skipped }, null, 2));
