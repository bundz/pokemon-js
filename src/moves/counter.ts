import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Counter extends Move {
  constructor() {
    super(MoveData.Counter);
  }
}
