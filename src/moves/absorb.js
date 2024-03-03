
import { Move } from "../base/move.js";
import moves from "../../data/moves.json" assert { type: "json" };

export class Absorb extends Move {
  constructor() {
    super(moves.Absorb);
  }
}    
  