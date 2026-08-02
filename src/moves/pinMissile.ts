import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class PinMissile extends Move {
  constructor() {
    super(MoveData.PinMissile);
  }
}
