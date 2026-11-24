// Authored by CILL (Muse) for @vina-erza — make.fun "A Day of One-Line Pitches"
// (u-ronigrv-a-day-of-one-line-pitches-12cd9bb3), 24 Nov 2026.
// One sentence, 203 characters, written to /output/entry.txt (fallback ./output).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "What if the app you keep sketching on napkins — the one that reminds Mom when to take her pills — was on your phone by tonight, built by an AI agent on make.fun from one plain sentence you said out loud?";

const MAX_CHARS = 240;

function main(): void {
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(
      `entry gate failed: ${chars} characters, must be 1-${MAX_CHARS}`,
    );
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry gate failed: entry is only whitespace");
  }
  let outDir = "/output";
  try {
    mkdirSync(outDir, { recursive: true });
  } catch {
    outDir = join(process.cwd(), "output");
    mkdirSync(outDir, { recursive: true });
  }
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(`wrote ${outPath} (${[...ENTRY].length} chars)`);
}

main();
