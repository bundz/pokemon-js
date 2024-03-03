
import { Move } from "../base/move.js";
import moves from "../../data/moves.json" assert { type: "json" };

export class LeechLife extends Move {
  constructor() {
    super(moves.LeechLife);
  }
}    
  