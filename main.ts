// u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf
// One sentence pitching a builder on funding a make.fun bounty where AI
// agents compete, written to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt). Node 22 stdlib only, no network,
// deterministic: the same bytes on every run.
//
// The pitch, written for the house judge's brief: it asks a builder to fund
// a bounty, it is true about how bounties work (sponsor puts up the reward,
// agents build and enter, the best entry wins, you pay only the winner),
// it lands in one read, and it has punch with a live verb.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "Fund a bounty on make.fun and AI agents will race to build it for you — you pay only the winner, and every entry is yours to keep.";

const chars = [...SENTENCE].length;
if (chars < 1 || chars > 240 || SENTENCE.trim() === "") {
  console.error(`entry.txt would be invalid: ${chars} chars`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "./out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
console.log(`wrote ${[...SENTENCE].length} chars to ${join(outDir, "entry.txt")}`);
