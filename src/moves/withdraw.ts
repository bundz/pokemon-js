import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Withdraw extends Move {
  constructor() {
    super(MoveData.Withdraw);
  }
}
