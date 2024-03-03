
import { Move } from "../base/move.js";
import moves from "../../data/moves.json" assert { type: "json" };

export class LovelyKiss extends Move {
  constructor() {
    super(moves.LovelyKiss);
  }
}    
  