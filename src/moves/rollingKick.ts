import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class RollingKick extends Move {
  constructor() {
    super(MoveData.RollingKick);
  }
}
