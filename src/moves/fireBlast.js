
import { Move } from "../base/move.js";
import moves from "../../data/moves.json" assert { type: "json" };

export class FireBlast extends Move {
  constructor() {
    super(moves.FireBlast);
  }
}    
  