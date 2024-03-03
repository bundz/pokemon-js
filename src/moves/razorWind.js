
import { Move } from "../base/move.js";
import moves from "../../data/moves.json" assert { type: "json" };

export class RazorWind extends Move {
  constructor() {
    super(moves.RazorWind);
  }
}    
  