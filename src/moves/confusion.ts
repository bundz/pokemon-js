import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Confusion extends Move {
  constructor() {
    super(MoveData.Confusion);
  }
}
