import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class QuickAttack extends Move {
  constructor() {
    super(MoveData.QuickAttack);
  }
}
