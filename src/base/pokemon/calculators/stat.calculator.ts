export class StatCalculator {
  static calculateStat(
    baseStat: number,
    iv: number,
    ev: number,
    level: number,
  ) {
    return (
      Math.floor(
        (((baseStat + iv) * 2 + Math.floor(Math.sqrt(ev) / 4)) * level) / 100,
      ) + 5
    );
  }

  static calculateHp(baseHp: number, iv: number, ev: number, level: number) {
    return (
      Math.floor(
        (((baseHp + iv) * 2 + Math.floor(Math.sqrt(ev) / 4)) * level) / 100,
      ) +
      level +
      10
    );
  }
}
