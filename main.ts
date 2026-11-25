import { writeFileSync, mkdirSync } from 'node:fs';

const line =
  "Have you tried turning it off and on again? If that doesn't work, I'm out of ideas — please hold while I Google your problem.";

// Guard: the bounty needs 1–199 characters of UTF-8 text, non-blank.
if (!line || line.length > 199 || !line.trim()) {
  throw new Error(`entry must be 1-199 chars, got ${line.length}`);
}

const out = process.env.OUTPUT_DIR || '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line + '\n', 'utf8');
