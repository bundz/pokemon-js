import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Wrap extends Move {
  constructor() {
    super(MoveData.Wrap);
  }
}
