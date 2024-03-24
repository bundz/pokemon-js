import { POKEMON_EXP_RATE_TYPES } from "../consts.js";
import { levelCalcSlow, levelCalcMediumFast, levelCalcMediumSlow, levelCalcFast } from "../utils/levelXpCalc.js";

export class Pokemon {
  #number;
  #name;
  #type1;
  #type2;
  #level;
  #exp;
  #expRateType;
  #currentHp;
  #baseHp;
  #baseAttack;
  #baseSpecial;
  #baseDef;
  #baseSpeed;
  #ivHp;
  #ivAttack;
  #ivDef;
  #ivSpecial;
  #ivSpeed;
  #evHp;
  #evAttack;
  #evDef;
  #evSpecial;
  #evSpeed;
  #moves;

  constructor(
    { number, name, type1, type2, exp = 0, expRateType, currentHp, baseHp, baseAttack, baseSpecial, baseDef, baseSpeed },
    { level = 1, iv, ev },
    moves = []
  ) {
    this.#number = number;
    this.#name = name;
    this.#type1 = type1;
    this.#type2 = type2;
    this.#level = level;
    this.#exp = exp;
    this.#expRateType = expRateType;
    this.#currentHp = currentHp ?? baseHp;
    this.#baseHp = baseHp;
    this.#baseAttack = baseAttack;
    this.#baseSpecial = baseSpecial;
    this.#baseDef = baseDef;
    this.#baseSpeed = baseSpeed;
    this.#ivHp = iv.hp;
    this.#ivAttack = iv.attack;
    this.#ivDef = iv.def;
    this.#ivSpecial = iv.special;
    this.#ivSpeed = iv.speed;
    this.#evHp = ev.hp;
    this.#evAttack = ev.attack;
    this.#evDef = ev.def;
    this.#evSpecial = ev.special;
    this.#evSpeed = ev.speed;
    this.#moves = moves;
  }

  get number() {
    return this.#number;
  }

  get name() {
    return this.#name;
  }

  get type1() {
    return this.#type1;
  }

  get type2() {
    return this.#type2;
  }

  get currentHp() {
    return this.#currentHp;
  }

  get level() {
    return this.#level;
  }

  get moves() {
    return this.#moves;
  }

  isAlive() {
    return this.#currentHp > 0;
  }

  getNextLevelExp() {
    if (this.#expRateType == POKEMON_EXP_RATE_TYPES.SLOW) {
      return levelCalcSlow(this.#level + 1);
    }

    if (this.#expRateType == POKEMON_EXP_RATE_TYPES.MEDIUM_SLOW) {
      return levelCalcMediumSlow(this.#level + 1);
    }

    if (this.#expRateType == POKEMON_EXP_RATE_TYPES.MEDIUM_FAST) {
      return levelCalcMediumFast(this.#level + 1);
    }

    if (this.#expRateType == POKEMON_EXP_RATE_TYPES.FAST) {
      return levelCalcFast(this.#level + 1);
    }
  }

  get baseHp() {
    return this.#baseHp;
  }

  get baseAttack() {
    return this.#baseAttack;
  }

  get baseSpecial() {
    return this.#baseSpecial;
  }

  get baseDef() {
    return this.#baseDef;
  }

  get baseSpeed() {
    return this.#baseSpeed;
  }

  get hp() {
    return Math.floor((((this.#baseHp + this.#ivHp) * 2 + Math.floor(Math.sqrt(this.#evHp) / 4)) * this.#level) / 100) + this.#level + 10;
  }

  get attack() {
    return Math.floor((((this.#baseAttack + this.#ivAttack) * 2 + Math.floor(Math.sqrt(this.#evAttack) / 4)) * this.#level) / 100) + 5;
  }

  get def() {
    return Math.floor((((this.#baseDef + this.#ivDef) * 2 + Math.floor(Math.sqrt(this.#evDef) / 4)) * this.#level) / 100) + 5;
  }

  get special() {
    return Math.floor((((this.#baseSpecial + this.#ivSpecial) * 2 + Math.floor(Math.sqrt(this.#evSpecial) / 4)) * this.#level) / 100) + 5;
  }

  get speed() {
    return Math.floor((((this.#baseSpeed + this.#ivSpeed) * 2 + Math.floor(Math.sqrt(this.#evSpeed) / 4)) * this.#level) / 100) + 5;
  }

  gainExp(exp) {
    //se o pokemon está lvl 100 return
    this.#exp = this.#exp + exp;

    if (this.#exp >= this.getNextLevelExp()) {
      this.levelUp();
    }
  }

  levelUp() {
    this.#level = this.#level + 1;
  }
}
