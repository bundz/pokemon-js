import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Toxic extends Move {
  constructor() {
    super(MoveData.Toxic);
  }
}
