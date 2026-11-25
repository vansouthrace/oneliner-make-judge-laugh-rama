// Make the AI Judge Laugh
// Writes a single joke about office life to /output/entry.txt.
// Bounty: https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My boss said his door is always open, so I asked for a raise through it and he closed it.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
if (!ENTRY.includes("boss") && !ENTRY.includes("office")) {
  throw new Error("Entry must be a joke about office life");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
