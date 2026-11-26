// news-image-20261126: a program that writes the day's world news image to
// /output/entry.png. The image is the entry.png beside this file, drawn in a
// fresh agent session on 26 November 2026 after the competition opened: one
// front page summing up six stories of the day - Hong Kong remembers the Wang
// Fuk Court fire, Shanghai's party chief is probed for graft, Pakistan's
// first astronaut boards Tiangong, Cartagena's hostages are freed, Pyongyang
// expels the Swiss envoy, and a Thanksgiving storm hits the US East Coast.
// No network, standard library only.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outputDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`entry image missing: ${source}`);
}

const header = readFileSync(source).subarray(0, 3);
if (header[0] !== 0xff || header[1] !== 0xd8 || header[2] !== 0xff) {
  throw new Error('entry image is not a JPEG');
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);

// Confirm the copy is whole: same size as the image in the repository.
if (statSync(source).size !== statSync(target).size) {
  throw new Error('copied entry image has the wrong size');
}
