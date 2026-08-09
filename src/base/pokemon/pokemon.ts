import { PokemonData } from "../../../data/pokemon.data";
import { LevelCalculator, StatCalculator } from "./calculators";

import {
  PokemonType,
  ExpRateType,
  PokemonBaseStats,
  PokemonStatModifiers,
  PokemonState,
  PokemonBaseData,
  EvolutionCondition,
  EvolutionConditionLevel,
  GainExpResult,
  EvolutionStone,
  EvolutionType,
  EvolutionConditionStone,
  EvolutionConditionTrade,
  PokemonList,
} from "./pokemon.type";
import { PokemonValidator } from "./pokemon.validator";

export class Pokemon {
  private _number: number;
  private _name: PokemonList;
  private _type1: PokemonType;
  private _type2: PokemonType | null;
  private _expRateType: ExpRateType;
  private _baseStats: PokemonBaseStats;
  private _statModifiers: PokemonStatModifiers;
  private _state: PokemonState;
  private _evolutionConditions: EvolutionCondition[];

  private canLevelUp() {
    return this._state.exp >= this.getNextLevelExp() && this.level < 100;
  }

  private levelUp() {
    this._state.level = this._state.level + 1;
    const result = { hasLeveledUp: true, canEvolve: false };

    if (this.canLevelUp()) {
      this.levelUp();
    }

    result.canEvolve = this.canEvolveByLevelUp();
    return result;
  }

  private getLevelEvolutionCondition(): EvolutionConditionLevel | undefined {
    return this._evolutionConditions.find(
      (c): c is EvolutionConditionLevel => "level" in c,
    );
  }

  private getTradeEvolutionCondition(): EvolutionConditionTrade | undefined {
    return this._evolutionConditions.find(
      (c): c is EvolutionConditionTrade => "trade" in c,
    );
  }

  private getStoneEvolutionCondition(
    stone: EvolutionStone,
  ): EvolutionConditionStone | undefined {
    return this._evolutionConditions.find(
      (c): c is EvolutionConditionStone => "stone" in c && c.stone === stone,
    );
  }

  private canEvolveTo(pokemon: PokemonList) {
    return this._evolutionConditions.find((c) => c.pokemon === pokemon);
  }

  private executeEvolution(pokemon: PokemonList) {
    if (!this.canEvolveTo(pokemon)) {
      throw new Error(`${this.name} can't evolve to ${pokemon}`);
    }

    const evolutionData = PokemonData[pokemon];

    this._number = evolutionData.number;
    this._name = evolutionData.name;
    this._type1 = evolutionData.type1;
    this._type2 = evolutionData.type2;
    this._expRateType = evolutionData.expRateType;
    this._baseStats = evolutionData.baseStats;
    this._evolutionConditions = evolutionData.evolutionConditions;
  }

  private evolveByLevelUp() {
    const levelUpCondition = this.getLevelEvolutionCondition();

    if (!levelUpCondition) {
      throw new Error("Pokemon don't have a level up evolution");
    }

    if (!this.canEvolveByLevelUp()) {
      throw new Error("Pokemon can't evolve by level up");
    }

    this.executeEvolution(levelUpCondition.pokemon);
  }

  private evolveByStone(stone?: EvolutionStone) {
    if (!stone) {
      throw new Error("Stone is undefined");
    }

    const evolution = this.getStoneEvolutionCondition(stone);

    if (!evolution) {
      throw new Error(`${this._name} can't evolve by ${stone}`);
    }

    this.executeEvolution(evolution.pokemon);
  }

  private evolveByTrade() {
    const tradeCondition = this.getTradeEvolutionCondition();

    if (!tradeCondition) {
      throw new Error(`${this._name} can't evolve by trade`);
    }

    this.executeEvolution(tradeCondition.pokemon);
  }

  constructor(
    pokemonBaseData: PokemonBaseData,
    statModifiers: PokemonStatModifiers,
    state: PokemonState,
  ) {
    const isValid = PokemonValidator.validate(
      pokemonBaseData,
      statModifiers,
      state,
    );

    if (!isValid) {
      throw new Error("Invalid pokemon data");
    }

    this._number = pokemonBaseData.number;
    this._name = pokemonBaseData.name;
    this._type1 = pokemonBaseData.type1;
    this._type2 = pokemonBaseData.type2;
    this._expRateType = pokemonBaseData.expRateType;
    this._baseStats = pokemonBaseData.baseStats;
    this._evolutionConditions = pokemonBaseData.evolutionConditions;
    this._statModifiers = statModifiers;
    this._state = state;
  }

  get number() {
    return this._number;
  }

  get name() {
    return this._name;
  }

  get type1() {
    return this._type1;
  }

  get type2() {
    return this._type2;
  }

  get currentHp() {
    return this._state.currentHp;
  }

  get level() {
    return this._state.level;
  }

  get moves() {
    return this._state.moves;
  }

  get baseHp() {
    return this._baseStats.hp;
  }

  get baseAttack() {
    return this._baseStats.attack;
  }

  get baseSpecial() {
    return this._baseStats.special;
  }

  get baseDef() {
    return this._baseStats.def;
  }

  get baseSpeed() {
    return this._baseStats.speed;
  }

  get hp() {
    return StatCalculator.calculateHp(
      this._baseStats.hp,
      this.statModifiers.iv.hp,
      this.statModifiers.ev.hp,
      this.level,
    );
  }

  get attack() {
    return StatCalculator.calculateStat(
      this._baseStats.attack,
      this.statModifiers.iv.attack,
      this.statModifiers.ev.attack,
      this.level,
    );
  }

  get def() {
    return StatCalculator.calculateStat(
      this._baseStats.def,
      this.statModifiers.iv.def,
      this.statModifiers.ev.def,
      this.level,
    );
  }

  get special() {
    return StatCalculator.calculateStat(
      this._baseStats.special,
      this.statModifiers.iv.special,
      this.statModifiers.ev.special,
      this.level,
    );
  }

  get speed() {
    return StatCalculator.calculateStat(
      this._baseStats.speed,
      this.statModifiers.iv.speed,
      this.statModifiers.ev.speed,
      this.level,
    );
  }

  get state(): PokemonState {
    return this._state;
  }

  get statModifiers(): PokemonStatModifiers {
    return this._statModifiers;
  }

  isAlive() {
    return this.currentHp > 0;
  }

  isDefeated() {
    return !this.isAlive;
  }

  getNextLevelExp() {
    return LevelCalculator.calc(this._state.level, this._expRateType);
  }

  gainExp(exp: number): GainExpResult {
    const result = { hasLeveledUp: false, canEvolve: false };
    if (this._state.level === 100) {
      return result;
    }

    this._state.exp = this._state.exp + exp;

    if (this._state.exp >= this.getNextLevelExp()) {
      return this.levelUp();
    }

    return result;
  }

  canEvolveByLevelUp() {
    const levelUpCondition = this.getLevelEvolutionCondition();

    if (!levelUpCondition) {
      return false;
    }

    if (this.state.level >= levelUpCondition.level) {
      return true;
    }

    return false;
  }

  canEvolveByStone(stone: EvolutionStone) {
    return this.getStoneEvolutionCondition(stone);
  }

  evolve(evolutionType: EvolutionType, stone?: EvolutionStone) {
    if (evolutionType === EvolutionType.Level) {
      return this.evolveByLevelUp();
    }

    if (evolutionType === EvolutionType.EvolutionStone) {
      return this.evolveByStone(stone);
    }

    if (evolutionType === EvolutionType.Trade) {
      return this.evolveByTrade();
    }
  }
}
