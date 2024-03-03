
import { Move } from "../base/move.js";
import moves from "../../data/moves.json" assert { type: "json" };

export class Blizzard extends Move {
  constructor() {
    super(moves.Blizzard);
  }
}    
  