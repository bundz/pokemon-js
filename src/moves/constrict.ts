import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Constrict extends Move {
  constructor() {
    super(MoveData.Constrict);
  }
}
