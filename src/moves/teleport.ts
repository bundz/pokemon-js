import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Teleport extends Move {
  constructor() {
    super(MoveData.Teleport);
  }
}
