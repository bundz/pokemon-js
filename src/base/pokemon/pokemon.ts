import { NextLevelCalculator } from "./next-level-calculator.util";

import {
  PokemonType,
  ExpRateType,
  PokemonBaseStats,
  PokemonStatModifiers,
  PokemonState,
  PokemonBaseData,
  Stats,
} from "./pokemon.type";

export class Pokemon {
  private _number: number;
  private _name: string;
  private _type1: PokemonType;
  private _type2: PokemonType | null;
  private _expRateType: ExpRateType;
  private _baseStats: PokemonBaseStats;
  private _statModifiers: PokemonStatModifiers;
  private _state: PokemonState;

  constructor(
    pokemonBaseData: PokemonBaseData,
    statModifiers: PokemonStatModifiers,
    state: PokemonState,
  ) {
    this._number = pokemonBaseData.number;
    this._name = pokemonBaseData.name;
    this._type1 = pokemonBaseData.type1;
    this._type2 = pokemonBaseData.type2;
    this._expRateType = pokemonBaseData.expRateType;
    this._baseStats = pokemonBaseData.baseStats;
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
    return (
      Math.floor(
        (((this.baseHp + this._statModifiers.iv.hp) * 2 +
          Math.floor(Math.sqrt(this._statModifiers.ev.hp) / 4)) *
          this._state.level) /
          100,
      ) +
      this._state.level +
      10
    );
  }

  get attack() {
    return this.calculateStat(Stats.Attack);
  }

  get def() {
    return this.calculateStat(Stats.Attack);
  }

  get special() {
    return this.calculateStat(Stats.Special);
  }

  get speed() {
    return this.calculateStat(Stats.Speed);
  }

  calculateStat(stat: Stats) {
    return (
      Math.floor(
        (((this._baseStats[stat] + this._statModifiers.iv[stat]) * 2 +
          Math.floor(Math.sqrt(this._statModifiers.ev[stat]) / 4)) *
          this._state.level) /
          100,
      ) + 5
    );
  }

  isAlive() {
    return this.currentHp > 0;
  }

  isDefeated() {
    return !this.isAlive;
  }

  getNextLevelExp() {
    return NextLevelCalculator.calc(this._state.level, this._expRateType);
  }

  gainExp(exp: number) {
    if (this._state.level === 100) {
      return;
    }

    this._state.exp = this._state.exp + exp;
    this.checkLevelUp();
  }

  checkLevelUp() {
    if (this._state.exp >= this.getNextLevelExp()) {
      this.levelUp();
    }
  }

  levelUp() {
    this._state.exp = this._state.level + 1;
    this.checkLevelUp();
  }
}
