import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class PayDay extends Move {
  constructor() {
    super(MoveData.PayDay);
  }
}
