import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Recover extends Move {
  constructor() {
    super(MoveData.Recover);
  }
}
