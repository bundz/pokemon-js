import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class SelfDestruct extends Move {
  constructor() {
    super(MoveData.SelfDestruct);
  }
}
