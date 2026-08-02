import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class PoisonGas extends Move {
  constructor() {
    super(MoveData.PoisonGas);
  }
}
