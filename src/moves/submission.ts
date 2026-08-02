import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Submission extends Move {
  constructor() {
    super(MoveData.Submission);
  }
}
