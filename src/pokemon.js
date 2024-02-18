import { POKEMON_EXP_RATE_TYPES } from "./consts.js";
import { levelCalcSlow, levelCalcMediumFast, levelCalcMediumSlow, levelCalcFast } from "./pokemonExpRateTypes.js";

export class Pokemon {
  #number;
  #name;
  #hp;
  #attack;
  #special;
  #def;
  #speed;
  #level;
  #exp;
  #expRateType;
  #currentHp;
  #baseHp;
  #baseAttack;
  #baseSpecial;
  #baseDef;
  #baseSpeed;

  constructor({ number, name, hp, attack, special, def, speed, level = 1, exp = 0, expRateType, currentHp, baseHp, baseAttack, baseSpecial, baseDef, baseSpeed }) {
    this.#number = number;
    this.#name = name;
    this.#hp = hp;
    this.#attack = attack;
    this.#special = special;
    this.#def = def;
    this.#speed = speed;
    this.#level = level;
    this.#exp = exp;
    this.#expRateType = expRateType;
    this.#currentHp = currentHp ?? hp;
    this.#baseHp = baseHp;
    this.#baseAttack = baseAttack;
    this.#baseSpecial = baseSpecial;
    this.#baseDef = baseDef;
    this.#baseSpeed = baseSpeed;
  }

  getNumber() {
    return this.#number;
  }

  getName() {
    return this.#name;
  }

  getHp() {
    return this.#hp;
  }

  getCurrentHp() {
    return this.#currentHp;
  }

  getAttack() {
    return this.#attack;
  }

  getSpecial() {
    return this.#special;
  }

  getDef() {
    return this.#def;
  }

  getSpeed() {
    return this.#speed;
  }

  getLevel() {
    return this.#level;
  }

  isAlive() {
    return this.#currentHp > 0;
  }

  getStatus() {
    const status = {
      hp: this.#hp,
      attack: this.#attack,
      special: this.#special,
      def: this.#def,
      speed: this.#speed,
      level: this.#level,
      exp: this.#exp,
    };

    return status;
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

  getBaseHp() {
    return this.#baseHp;
  }

  getBaseAttack() {
    return this.#baseAttack;
  }

  getBaseSpecial() {
    return this.#baseSpecial
  }

  getBaseDef() {
    return this.#baseDef;
  }

  getBaseSpeed() {
    return this.#baseSpeed;
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
