import { Move } from "../base/move.js";
import moves from "../../data/moves.json" with { type: "json" };

export class Acid extends Move {
  constructor() {
    super(moves.Acid);
  }
}
