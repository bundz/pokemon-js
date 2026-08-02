import { Move } from "../base/move.js";
import moves from "../../data/moves.json" with { type: "json" };

export class PinMissile extends Move {
  constructor() {
    super(moves.PinMissile);
  }
}
