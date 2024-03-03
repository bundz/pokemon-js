
import { Move } from "../base/move.js";
import moves from "../../data/moves.json" assert { type: "json" };

export class Withdraw extends Move {
  constructor() {
    super(moves.Withdraw);
  }
}    
  