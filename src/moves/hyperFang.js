
import { Move } from "../base/move.js";
import moves from "../../data/moves.json" assert { type: "json" };

export class HyperFang extends Move {
  constructor() {
    super(moves.HyperFang);
  }
}    
  