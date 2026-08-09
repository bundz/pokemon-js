import { expect } from "chai";
import { StatCalculator } from "../stat.calculator";

describe("StatCalculator", () => {
  describe("calculateStat", () => {
    it("should return correct stat", () => {
      const attackExample = StatCalculator.calculateStat(55, 8, 23140, 81);
      const defExample = StatCalculator.calculateStat(30, 13, 17280, 81);
      const speedExample = StatCalculator.calculateStat(90, 5, 24795, 81);
      const specialExample = StatCalculator.calculateStat(50, 9, 19625, 81);
      expect(attackExample).to.be.equal(137);
      expect(defExample).to.be.equal(101);
      expect(speedExample).to.be.equal(190);
      expect(specialExample).to.be.equal(128);
    });

    it("should return correct hp", () => {
      const hpExample = StatCalculator.calculateHp(35, 7, 22850, 81);
      expect(hpExample).to.be.equal(189);
    });
  });
});
