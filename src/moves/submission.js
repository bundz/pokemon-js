import { Move } from "../base/move.js";
import moves from "../../data/moves.json" with { type: "json" };

export class Submission extends Move {
  constructor() {
    super(moves.Submission);
  }
}
