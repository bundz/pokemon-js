import { Move } from "../base/move";
import { MoveData } from "../../data/moves.data";

export class Psychic extends Move {
  constructor() {
    super(MoveData.Psychic);
  }
}
