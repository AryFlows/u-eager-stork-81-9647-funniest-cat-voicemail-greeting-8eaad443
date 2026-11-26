import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const greeting =
  "You've reached Miso. I'm napping in the box the bed came in — leave a message and I'll wake you for breakfast at 4 a.m.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), greeting, "utf8");
