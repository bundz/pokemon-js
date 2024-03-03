
import { Move } from "../base/move.js";
import moves from "../../data/moves.json" assert { type: "json" };

export class StringShot extends Move {
  constructor() {
    super(moves.StringShot);
  }
}    
  