import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Peck extends Move {
  constructor() {
    super(MoveData.Peck);
  }
}
