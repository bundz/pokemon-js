import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Stomp extends Move {
  constructor() {
    super(MoveData.Stomp);
  }
}
