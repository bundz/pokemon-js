import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Tackle extends Move {
  constructor() {
    super(MoveData.Tackle);
  }
}
