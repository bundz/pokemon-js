import { Move } from "../base/move.js";
import moves from "../../data/moves.json" with { type: "json" };

export class Sing extends Move {
  constructor() {
    super(moves.Sing);
  }
}
