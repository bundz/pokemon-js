import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class TakeDown extends Move {
  constructor() {
    super(MoveData.TakeDown);
  }
}
