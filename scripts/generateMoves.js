import moves from "../data/moves.json" assert { type: "json" };
import fs from "fs";

for (const move in moves) {
  const filename = move[0].toLowerCase() + move.slice(1, move.length);
  fs.writeFileSync(
    `./src/moves/${filename}.js`,
    `
import { Move } from "../base/move.js";
import moves from "../../data/moves.json" assert { type: "json" };

export class ${move} extends Move {
  constructor() {
    super(moves.${move});
  }
}    
  `
  );
}
