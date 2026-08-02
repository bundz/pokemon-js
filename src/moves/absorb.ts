import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Absorb extends Move {
  constructor() {
    super(MoveData.Absorb);
  }
}
