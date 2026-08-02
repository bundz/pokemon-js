import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Sing extends Move {
  constructor() {
    super(MoveData.Sing);
  }
}
