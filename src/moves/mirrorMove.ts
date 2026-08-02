import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class MirrorMove extends Move {
  constructor() {
    super(MoveData.MirrorMove);
  }
}
