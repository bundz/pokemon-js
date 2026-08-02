import { Move } from "../base/move.js";
import moves from "../../data/moves.json" with { type: "json" };

export class PoisonGas extends Move {
  constructor() {
    super(moves.PoisonGas);
  }
}
