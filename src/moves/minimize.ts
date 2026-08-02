import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Minimize extends Move {
  constructor() {
    super(MoveData.Minimize);
  }
}
