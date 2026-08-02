import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class WingAttack extends Move {
  constructor() {
    super(MoveData.WingAttack);
  }
}
