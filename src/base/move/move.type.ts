import { PokemonType } from "../pokemon";

export enum MoveCategory {
  Physical = "physical",
  Special = "special",
  Status = "status",
}

export type MoveBaseData = {
  name: string;
  type: PokemonType;
  category: MoveCategory;
  pp: number;
  power: number;
  accuracy: number;
};
