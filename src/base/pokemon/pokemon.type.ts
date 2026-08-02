export enum PokemonType {
  Water = "water",
  Fire = "fire",
  Grass = "grass",
  Electric = "electric",
  Psychic = "psychic",
  Rock = "rock",
  Ground = "ground",
  Poison = "poison",
  Bug = "bug",
  Dragon = "dragon",
  Fighting = "fighting",
  Normal = "normal",
  Flying = "flying",
  Ice = "ice",
}

export enum ExpRateType {
  Slow = "slow",
  MediumSlow = "medium_slow",
  MediumFast = "medium_fast",
  Fast = "fast",
}

export enum Stats {
  Hp = "hp",
  Attack = "attack",
  Special = "special",
  Def = "def",
  Speed = "speed",
}

export type PokemonBaseStats = {
  [Stats.Hp]: number;
  [Stats.Attack]: number;
  [Stats.Special]: number;
  [Stats.Def]: number;
  [Stats.Speed]: number;
};

export type PokemonBaseData = {
  number: number;
  name: string;
  type1: PokemonType;
  type2: PokemonType | null;
  expRateType: ExpRateType;
  baseStats: PokemonBaseStats;
};

export type IndividualValue = {
  [Stats.Hp]: number;
  [Stats.Attack]: number;
  [Stats.Special]: number;
  [Stats.Def]: number;
  [Stats.Speed]: number;
};

export type EfforValue = {
  [Stats.Hp]: number;
  [Stats.Attack]: number;
  [Stats.Special]: number;
  [Stats.Def]: number;
  [Stats.Speed]: number;
};

export type PokemonStatModifiers = {
  iv: IndividualValue;
  ev: EfforValue;
};

export type PokemonState = {
  level: number;
  exp: number;
  currentHp: number;
  moves: [];
};
