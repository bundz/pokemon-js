
import { Move } from "../base/move.js";
import moves from "../../data/moves.json" assert { type: "json" };

export class TailWhip extends Move {
  constructor() {
    super(moves.TailWhip);
  }
}    
  