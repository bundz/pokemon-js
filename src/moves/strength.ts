import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Strength extends Move {
  constructor() {
    super(MoveData.Strength);
  }
}
