
import { Move } from "../base/move.js";
import moves from "../../data/moves.json" assert { type: "json" };

export class FuryAttack extends Move {
  constructor() {
    super(moves.FuryAttack);
  }
}    
  