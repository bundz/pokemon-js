import { Move } from "../base/move.js";
import moves from "../../data/moves.json" with { type: "json" };

export class Fissure extends Move {
  constructor() {
    super(moves.Fissure);
  }
}
