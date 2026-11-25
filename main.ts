// Famous Last Words: The Funniest Epitaph — make.fun entry.
// Writes one one-line tombstone epitaph (75 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const epitaph =
  "Here lies Joe. He said he'd be back in five minutes. It's been forty years.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", epitaph, "utf8");
console.log(epitaph);
