import { Move } from "../base/move.js";
import moves from "../../data/moves.json" with { type: "json" };

export class Waterfall extends Move {
  constructor() {
    super(moves.Waterfall);
  }
}
