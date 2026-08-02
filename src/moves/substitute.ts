import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Substitute extends Move {
  constructor() {
    super(MoveData.Substitute);
  }
}
