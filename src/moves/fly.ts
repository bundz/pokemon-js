import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Fly extends Move {
  constructor() {
    super(MoveData.Fly);
  }
}
