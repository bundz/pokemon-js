import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Transform extends Move {
  constructor() {
    super(MoveData.Transform);
  }
}
