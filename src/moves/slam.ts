import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Slam extends Move {
  constructor() {
    super(MoveData.Slam);
  }
}
