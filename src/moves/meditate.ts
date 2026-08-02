import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Meditate extends Move {
  constructor() {
    super(MoveData.Meditate);
  }
}
