
import { Move } from "../base/move.js";
import moves from "../../data/moves.json" assert { type: "json" };

export class Bite extends Move {
  constructor() {
    super(moves.Bite);
  }
}    
  