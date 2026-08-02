import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class SkyAttack extends Move {
  constructor() {
    super(MoveData.SkyAttack);
  }
}
