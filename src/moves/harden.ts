import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Harden extends Move {
  constructor() {
    super(MoveData.Harden);
  }
}
