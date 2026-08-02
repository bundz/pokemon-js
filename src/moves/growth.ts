import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Growth extends Move {
  constructor() {
    super(MoveData.Growth);
  }
}
