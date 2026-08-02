import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Rest extends Move {
  constructor() {
    super(MoveData.Rest);
  }
}
