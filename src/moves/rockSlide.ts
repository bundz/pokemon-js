import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class RockSlide extends Move {
  constructor() {
    super(MoveData.RockSlide);
  }
}
