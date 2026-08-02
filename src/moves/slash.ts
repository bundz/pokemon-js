import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Slash extends Move {
  constructor() {
    super(MoveData.Slash);
  }
}
