import { Move } from "../move";

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
  Ghost = "ghost",
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
  name: PokemonList;
  type1: PokemonType;
  type2: PokemonType | null;
  expRateType: ExpRateType;
  baseStats: PokemonBaseStats;
  evolutionConditions: EvolutionCondition[];
};

export type GainExpResult = {
  hasLeveledUp: boolean;
  canEvolve: boolean;
};

export type EvolutionConditionLevel = {
  pokemon: PokemonList;
  level: number;
};

export type EvolutionConditionTrade = {
  pokemon: PokemonList;
  trade: true;
};

export type EvolutionConditionStone = {
  pokemon: PokemonList;
  stone: EvolutionStone;
};

export type EvolutionCondition =
  | EvolutionConditionLevel
  | EvolutionConditionStone
  | EvolutionConditionTrade;

export enum EvolutionStone {
  MoonStone = "moon_stone",
  FireStone = "fire_stone",
  WaterStone = "water_stone",
  ThunderStone = "thunder_stone",
  LeafStone = "leaf_stone",
}

export enum EvolutionType {
  Level = "level",
  EvolutionStone = "evolution_stone",
  Trade = "trade",
}

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
  moves: Move[];
};

export enum PokemonList {
  Bulbasaur = "Bulbasaur",
  Ivysaur = "Ivysaur",
  Venusaur = "Venusaur",
  Charmander = "Charmander",
  Charmeleon = "Charmeleon",
  Charizard = "Charizard",
  Squirtle = "Squirtle",
  Wartortle = "Wartortle",
  Blastoise = "Blastoise",
  Caterpie = "Caterpie",
  Metapod = "Metapod",
  Butterfree = "Butterfree",
  Weedle = "Weedle",
  Kakuna = "Kakuna",
  Beedrill = "Beedrill",
  Pidgey = "Pidgey",
  Pidgeotto = "Pidgeotto",
  Pidgeot = "Pidgeot",
  Rattata = "Rattata",
  Raticate = "Raticate",
  Spearow = "Spearow",
  Fearow = "Fearow",
  Ekans = "Ekans",
  Arbok = "Arbok",
  Pikachu = "Pikachu",
  Raichu = "Raichu",
  Sandshrew = "Sandshrew",
  Sandslash = "Sandslash",
  NidoranF = "NidoranF",
  Nidorina = "Nidorina",
  Nidoqueen = "Nidoqueen",
  NidoranM = "NidoranM",
  Nidorino = "Nidorino",
  Nidoking = "Nidoking",
  Clefairy = "Clefairy",
  Clefable = "Clefable",
  Vulpix = "Vulpix",
  Ninetales = "Ninetales",
  Jigglypuff = "Jigglypuff",
  Wigglytuff = "Wigglytuff",
  Zubat = "Zubat",
  Golbat = "Golbat",
  Oddish = "Oddish",
  Gloom = "Gloom",
  Vileplume = "Vileplume",
  Paras = "Paras",
  Parasect = "Parasect",
  Venonat = "Venonat",
  Venomoth = "Venomoth",
  Diglett = "Diglett",
  Dugtrio = "Dugtrio",
  Meowth = "Meowth",
  Persian = "Persian",
  Psyduck = "Psyduck",
  Golduck = "Golduck",
  Mankey = "Mankey",
  Primeape = "Primeape",
  Growlithe = "Growlithe",
  Arcanine = "Arcanine",
  Poliwag = "Poliwag",
  Poliwhirl = "Poliwhirl",
  Poliwrath = "Poliwrath",
  Abra = "Abra",
  Kadabra = "Kadabra",
  Alakazam = "Alakazam",
  Machop = "Machop",
  Machoke = "Machoke",
  Machamp = "Machamp",
  Bellsprout = "Bellsprout",
  Weepinbell = "Weepinbell",
  Victreebel = "Victreebel",
  Tentacool = "Tentacool",
  Tentacruel = "Tentacruel",
  Geodude = "Geodude",
  Graveler = "Graveler",
  Golem = "Golem",
  Ponyta = "Ponyta",
  Rapidash = "Rapidash",
  Slowpoke = "Slowpoke",
  Slowbro = "Slowbro",
  Magnemite = "Magnemite",
  Magneton = "Magneton",
  Farfetchd = "Farfetchd",
  Doduo = "Doduo",
  Dodrio = "Dodrio",
  Seel = "Seel",
  Dewgong = "Dewgong",
  Grimer = "Grimer",
  Muk = "Muk",
  Shellder = "Shellder",
  Cloyster = "Cloyster",
  Gastly = "Gastly",
  Haunter = "Haunter",
  Gengar = "Gengar",
  Onix = "Onix",
  Drowzee = "Drowzee",
  Hypno = "Hypno",
  Krabby = "Krabby",
  Kingler = "Kingler",
  Voltorb = "Voltorb",
  Electrode = "Electrode",
  Exeggcute = "Exeggcute",
  Exeggutor = "Exeggutor",
  Cubone = "Cubone",
  Marowak = "Marowak",
  Hitmonlee = "Hitmonlee",
  Hitmonchan = "Hitmonchan",
  Lickitung = "Lickitung",
  Koffing = "Koffing",
  Weezing = "Weezing",
  Rhyhorn = "Rhyhorn",
  Rhydon = "Rhydon",
  Chansey = "Chansey",
  Tangela = "Tangela",
  Kangaskhan = "Kangaskhan",
  Horsea = "Horsea",
  Seadra = "Seadra",
  Goldeen = "Goldeen",
  Seaking = "Seaking",
  Staryu = "Staryu",
  Starmie = "Starmie",
  MrMime = "MrMime",
  Scyther = "Scyther",
  Jynx = "Jynx",
  Electabuzz = "Electabuzz",
  Magmar = "Magmar",
  Pinsir = "Pinsir",
  Tauros = "Tauros",
  Magikarp = "Magikarp",
  Gyarados = "Gyarados",
  Lapras = "Lapras",
  Ditto = "Ditto",
  Eevee = "Eevee",
  Vaporeon = "Vaporeon",
  Jolteon = "Jolteon",
  Flareon = "Flareon",
  Porygon = "Porygon",
  Omanyte = "Omanyte",
  Omastar = "Omastar",
  Kabuto = "Kabuto",
  Kabutops = "Kabutops",
  Aerodactyl = "Aerodactyl",
  Snorlax = "Snorlax",
  Articuno = "Articuno",
  Zapdos = "Zapdos",
  Moltres = "Moltres",
  Dratini = "Dratini",
  Dragonair = "Dragonair",
  Dragonite = "Dragonite",
  Mewtwo = "Mewtwo",
  Mew = "Mew",
}
