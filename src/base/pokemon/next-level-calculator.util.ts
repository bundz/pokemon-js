import { ExpRateType } from "./pokemon.type";

export class NextLevelCalculator {
  static calc(level: number, expRateType: ExpRateType) {
    if (expRateType === ExpRateType.Slow) {
      return this.calcSlow(level);
    }

    if (expRateType === ExpRateType.MediumSlow) {
      return this.calcMediumSlow(level);
    }

    if (expRateType === ExpRateType.MediumFast) {
      return this.calcMediumFast(level);
    }

    if (expRateType === ExpRateType.Fast) {
      return this.calcFast(level);
    }

    throw new Error("Invalid ExpRateType");
  }

  static calcSlow(level: number) {
    return (Math.pow(level, 3) * 5) / 4;
  }

  static calcMediumSlow(level: number) {
    return (
      (Math.pow(level, 3) * 6) / 5 - 15 * Math.pow(level, 2) + level * 100 - 140
    );
  }

  static calcMediumFast(level: number) {
    return Math.pow(level, 3);
  }

  static calcFast(level: number) {
    return (Math.pow(level, 3) * 4) / 5;
  }
}
