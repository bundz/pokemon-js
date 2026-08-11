import { LevelCalculator } from "./src/base/pokemon/calculators";

const result: any = [];

for (let i = 1; i <= 100; i++) {
  const slow = LevelCalculator.calcSlow(i);
  const medium_slow = LevelCalculator.calcMediumSlow(i);
  const medium_fast = LevelCalculator.calcMediumFast(i);
  const fast = LevelCalculator.calcFast(i);
  result.push({ level: i, slow, medium_slow, medium_fast, fast });
}

console.log(result[81]);
