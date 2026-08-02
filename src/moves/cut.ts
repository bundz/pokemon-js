import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Cut extends Move {
  constructor() {
    super(MoveData.Cut);
  }
}
