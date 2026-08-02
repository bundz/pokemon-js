import { Move } from "../base/move.js";
import moves from "../../data/moves.json" with { type: "json" };

export class AuroraBeam extends Move {
  constructor() {
    super(moves.AuroraBeam);
  }
}
