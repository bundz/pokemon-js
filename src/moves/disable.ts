import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Disable extends Move {
  constructor() {
    super(MoveData.Disable);
  }
}
