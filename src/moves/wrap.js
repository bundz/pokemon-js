import { Move } from "../base/move.js";
import moves from "../../data/moves.json" with { type: "json" };

export class Wrap extends Move {
  constructor() {
    super(moves.Wrap);
  }
}
