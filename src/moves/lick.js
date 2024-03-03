
import { Move } from "../base/move.js";
import moves from "../../data/moves.json" assert { type: "json" };

export class Lick extends Move {
  constructor() {
    super(moves.Lick);
  }
}    
  