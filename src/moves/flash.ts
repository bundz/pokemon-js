import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Flash extends Move {
  constructor() {
    super(MoveData.Flash);
  }
}
