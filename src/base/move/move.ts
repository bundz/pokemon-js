import { PokemonType } from "../pokemon";
import { MoveBaseData, MoveCategory } from "./move.type";

export class Move {
  private _name: string;
  private _type: PokemonType;
  private _category: MoveCategory;
  private _pp: number;
  private _power: number;
  private _accuracy: number;

  constructor(moveBaseData: MoveBaseData) {
    this._name = moveBaseData.name;
    this._type = moveBaseData.type;
    this._category = moveBaseData.category;
    this._pp = moveBaseData.pp;
    this._power = moveBaseData.power;
    this._accuracy = moveBaseData.accuracy;
  }

  get name() {
    return this._name;
  }

  get type() {
    return this._type;
  }

  get category() {
    return this._category;
  }

  get pp() {
    return this._pp;
  }

  get power() {
    return this._power;
  }

  get accuracy() {
    return this._accuracy;
  }
}
