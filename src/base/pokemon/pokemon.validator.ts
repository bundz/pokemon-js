import { TOTAL_POKEMON_NUMBER } from "../../../data/pokemon.data";
import { Move } from "../move";
import {
  IndividualValue,
  PokemonBaseData,
  PokemonBaseStats,
  PokemonStatModifiers,
  PokemonState,
  PokemonType,
  Stats,
} from "./pokemon.type";

const IV_LIMITS = {
  MIN: 0,
  MAX: 15,
};

const EV_LIMITS = {
  MIN: 0,
  MAX: 65535,
};

const LEVEL_LIMITS = {
  MIN: 1,
  MAX: 100,
};

const EXP_LIMITS = {
  MIN: 0,
};

const CURRENT_HP_LIMITS = {
  MIN: 0,
};

const MOVES_LIMITS = {
  MIN: 1,
  MAX: 4,
};

export class PokemonValidator {
  static validateNumber(number: number) {
    const isValid =
      number > 0 && number <= TOTAL_POKEMON_NUMBER && Number.isInteger(number);

    if (!isValid) {
      console.error(`${number} is not a valid number`);
      return false;
    }

    return true;
  }

  static validateTypes(type1: PokemonType, type2: PokemonType | null) {
    if (type1 === type2) {
      console.error(`pokemon type1 and type2 can't have the same value`);
      return false;
    }

    return true;
  }

  static validateBaseStat(statValue: number) {
    if (!Number.isInteger(statValue)) {
      console.error(`Stat is not integer`);
      return false;
    }

    if (statValue < 0) {
      console.error(`Stat is negative`);
      return false;
    }

    return true;
  }

  static validateBaseStats(baseStats: PokemonBaseStats) {
    let valid = true;

    for (const stat of Object.values(Stats)) {
      valid = valid && this.validateBaseStat(baseStats[stat]);
    }

    return valid;
  }

  static validateIV(ivValue: number) {
    if (!Number.isInteger(ivValue)) {
      console.error(`IV is not integer`);
      return false;
    }

    if (ivValue < IV_LIMITS.MIN) {
      console.error(`IV is lower than the limit of ${IV_LIMITS.MIN}`);
      return false;
    }

    if (ivValue > IV_LIMITS.MAX) {
      console.error(`IV is bigger than the limit of ${IV_LIMITS.MAX}`);
      return false;
    }

    return true;
  }

  static validateIVs(ivs: IndividualValue) {
    let valid = true;

    for (const stat of Object.values(Stats)) {
      valid = valid && this.validateIV(ivs[stat]);
    }

    return valid;
  }

  static validateEV(evValue: number) {
    if (!Number.isInteger(evValue)) {
      console.error(`EV is not integer`);
      return false;
    }

    if (evValue < EV_LIMITS.MIN) {
      console.error(`EV is lower than the limit of ${EV_LIMITS.MIN}`);
      return false;
    }

    if (evValue > EV_LIMITS.MAX) {
      console.error(`EV is bigger than the limit of ${EV_LIMITS.MAX}`);
      return false;
    }

    return true;
  }

  static validateEVs(evs: IndividualValue) {
    let valid = true;

    for (const stat of Object.values(Stats)) {
      valid = valid && this.validateEV(evs[stat]);
    }

    return valid;
  }

  static validateLevel(level: number) {
    if (!Number.isInteger(level)) {
      console.error(`level is not integer`);
      return false;
    }

    if (level < LEVEL_LIMITS.MIN) {
      console.error(`level is lower than the limit of ${LEVEL_LIMITS.MIN}`);
      return false;
    }

    if (level > LEVEL_LIMITS.MAX) {
      console.error(`level is bigger than the limit of ${LEVEL_LIMITS.MAX}`);
      return false;
    }

    return true;
  }

  static validateExp(exp: number) {
    if (!Number.isInteger(exp)) {
      console.error(`exp is not integer`);
      return false;
    }

    if (exp < EXP_LIMITS.MIN) {
      console.error(`exp is lower than the limit of ${EXP_LIMITS.MIN}`);
      return false;
    }

    return true;
  }

  static validateCurrentHp(currentHp: number) {
    if (!Number.isInteger(currentHp)) {
      console.error(`currentHp is not integer`);
      return false;
    }

    if (currentHp < CURRENT_HP_LIMITS.MIN) {
      console.error(
        `currentHp is lower than the limit of ${CURRENT_HP_LIMITS.MIN}`,
      );
      return false;
    }

    return true;
  }

  static validateMoves(moves: Move[]) {
    if (moves.length < MOVES_LIMITS.MIN) {
      console.error(`Pokemon can't have less than 1 move`);
      return false;
    }

    if (moves.length > MOVES_LIMITS.MAX) {
      console.error(`Pokemon can't have more than 4 moves`);
      return false;
    }

    const moveSet: Record<string, boolean> = {};

    for (const move of moves) {
      if (moveSet[move.name]) {
        console.log(`Pokemon has duplicated moves`);
        return false;
      }

      moveSet[move.name] = true;
    }

    return true;
  }

  static validate(
    pokemonBaseData: PokemonBaseData,
    statModifiers: PokemonStatModifiers,
    state: PokemonState,
  ) {
    return (
      this.validateNumber(pokemonBaseData.number) &&
      this.validateTypes(pokemonBaseData.type1, pokemonBaseData.type2) &&
      this.validateBaseStats(pokemonBaseData.baseStats) &&
      this.validateIVs(statModifiers.iv) &&
      this.validateEVs(statModifiers.ev) &&
      this.validateLevel(state.level) &&
      this.validateExp(state.exp) &&
      this.validateCurrentHp(state.currentHp) &&
      this.validateMoves(state.moves)
    );
  }
}
