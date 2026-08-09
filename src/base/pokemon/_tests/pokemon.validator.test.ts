import { expect } from "chai";
import { PokemonValidator } from "../pokemon.validator";
import { ExpRateType, PokemonList, PokemonType } from "../pokemon.type";
import { Absorb } from "../../../moves/absorb";
import { Move } from "../../move";
import { MoveData } from "../../../../data/moves.data";

describe("Pokemon Validator", () => {
  describe("Validate number", () => {
    it("should return false if number is less than 1", () => {
      const result = PokemonValidator.validateNumber(0);
      expect(result).to.be.equal(false);
    });

    it("should return false if number is greater than 151", () => {
      const result = PokemonValidator.validateNumber(152);
      expect(result).to.be.equal(false);
    });

    it("should return false if number is not integer", () => {
      const result = PokemonValidator.validateNumber(5.2);
      expect(result).to.be.equal(false);
    });

    it("should return true if number is valid", () => {
      const result = PokemonValidator.validateNumber(151);
      expect(result).to.be.equal(true);
    });
  });

  describe("Validate types", () => {
    it("should return false if types are equal", () => {
      const result = PokemonValidator.validateTypes(
        PokemonType.Bug,
        PokemonType.Bug,
      );
      expect(result).to.be.equal(false);
    });

    it("should return true if type2 is null", () => {
      const result = PokemonValidator.validateTypes(PokemonType.Bug, null);
      expect(result).to.be.equal(true);
    });

    it("should return true with any two types", () => {
      const result = PokemonValidator.validateTypes(
        PokemonType.Bug,
        PokemonType.Dragon,
      );
      expect(result).to.be.equal(true);
    });
  });

  describe("Validate base stat", () => {
    it("should return false if stat is not integer", () => {
      const result = PokemonValidator.validateBaseStat(4.2);
      expect(result).to.be.equal(false);
    });

    it("should return false if stat less than 0", () => {
      const result = PokemonValidator.validateBaseStat(-1);
      expect(result).to.be.equal(false);
    });
  });

  describe("Validate base stats", () => {
    it("should return false one or more stats are invalid", () => {
      const result = PokemonValidator.validateBaseStats({
        attack: 1,
        def: 2,
        speed: -1,
        special: 4.2,
        hp: 13,
      });
      expect(result).to.be.equal(false);
    });

    it("should return true when all stats are valid", () => {
      const result = PokemonValidator.validateBaseStats({
        attack: 1,
        def: 2,
        speed: 10,
        special: 40,
        hp: 50,
      });
      expect(result).to.be.equal(true);
    });
  });

  describe("Validate IV", () => {
    it("should return false if iv is not integer", () => {
      const result = PokemonValidator.validateIV(4.2);
      expect(result).to.be.equal(false);
    });

    it("should return false if iv less than 0", () => {
      const result = PokemonValidator.validateIV(-1);
      expect(result).to.be.equal(false);
    });

    it("should return false if iv greater than 15", () => {
      const result = PokemonValidator.validateIV(16);
      expect(result).to.be.equal(false);
    });

    it("should return true if iv is valid", () => {
      for (let i = 0; i < 16; i++) {
        const result = PokemonValidator.validateIV(i);
        expect(result).to.be.equal(true);
      }
    });
  });

  describe("Validate IVs", () => {
    it("should return false one or more ivs are invalid", () => {
      const result = PokemonValidator.validateBaseStats({
        attack: 1,
        def: 2,
        speed: -1,
        special: 4.2,
        hp: 13,
      });
      expect(result).to.be.equal(false);
    });

    it("should return true when all ivs are valid", () => {
      const result = PokemonValidator.validateBaseStats({
        attack: 1,
        def: 2,
        speed: 10,
        special: 10,
        hp: 12,
      });
      expect(result).to.be.equal(true);
    });
  });

  describe("Validate EV", () => {
    it("should return false if ev is not integer", () => {
      const result = PokemonValidator.validateEV(4.2);
      expect(result).to.be.equal(false);
    });

    it("should return false if ev less than 0", () => {
      const result = PokemonValidator.validateEV(-1);
      expect(result).to.be.equal(false);
    });

    it("should return false if iv greater than 65535", () => {
      const result = PokemonValidator.validateEV(65536);
      expect(result).to.be.equal(false);
    });

    it("should return true if ev is valid", () => {
      for (let i = 0; i < 65536; i++) {
        const result = PokemonValidator.validateEV(i);
        expect(result).to.be.equal(true);
      }
    });
  });

  describe("Validate EVs", () => {
    it("should return false one or more evs are invalid", () => {
      const result = PokemonValidator.validateBaseStats({
        attack: 1,
        def: 2,
        speed: -1,
        special: 4.2,
        hp: 65536,
      });
      expect(result).to.be.equal(false);
    });

    it("should return true when all evs are valid", () => {
      const result = PokemonValidator.validateBaseStats({
        attack: 65535,
        def: 0,
        speed: 10,
        special: 10,
        hp: 12,
      });
      expect(result).to.be.equal(true);
    });
  });

  describe("Validate Level", () => {
    it("should return false if level is not integer", () => {
      const result = PokemonValidator.validateLevel(1.1);
      expect(result).to.be.equal(false);
    });

    it("should return false if level less than 1", () => {
      const result = PokemonValidator.validateLevel(0);
      expect(result).to.be.equal(false);
    });

    it("should return false if iv greater than 100", () => {
      const result = PokemonValidator.validateLevel(101);
      expect(result).to.be.equal(false);
    });

    it("should return true if level is valid", () => {
      for (let i = 1; i < 101; i++) {
        const result = PokemonValidator.validateLevel(i);
        expect(result).to.be.equal(true);
      }
    });
  });

  describe("Validate Exp", () => {
    it("should return false if exp is not integer", () => {
      const result = PokemonValidator.validateExp(1.1);
      expect(result).to.be.equal(false);
    });

    it("should return false if exp less than 0", () => {
      const result = PokemonValidator.validateExp(-1);
      expect(result).to.be.equal(false);
    });

    it("should return true if exp is valid", () => {
      const result = PokemonValidator.validateExp(0);
      const result2 = PokemonValidator.validateExp(1000);
      const result3 = PokemonValidator.validateExp(100000);
      expect(result).to.be.equal(true);
      expect(result2).to.be.equal(true);
      expect(result3).to.be.equal(true);
    });
  });

  describe("Validate Current Hp", () => {
    it("should return false if current hp is not integer", () => {
      const result = PokemonValidator.validateCurrentHp(1.1);
      expect(result).to.be.equal(false);
    });

    it("should return false if currentHp less than 0", () => {
      const result = PokemonValidator.validateCurrentHp(-1);
      expect(result).to.be.equal(false);
    });

    it("should return true if current hp is valid", () => {
      const result = PokemonValidator.validateCurrentHp(150);
      const result2 = PokemonValidator.validateCurrentHp(1);
      const result3 = PokemonValidator.validateCurrentHp(0);
      expect(result).to.be.equal(true);
      expect(result2).to.be.equal(true);
      expect(result3).to.be.equal(true);
    });
  });

  describe("Validate moves", () => {
    it("should return false if moves length 0", () => {
      const result = PokemonValidator.validateMoves([]);
      expect(result).to.be.equal(false);
    });

    it("should return false if moves length is greater than 4", () => {
      const moves = [
        new Move(MoveData.Absorb),
        new Move(MoveData.Acid),
        new Move(MoveData.AcidArmor),
        new Move(MoveData.Agility),
        new Move(MoveData.Amnesia),
      ];
      const result = PokemonValidator.validateMoves(moves);
      expect(result).to.be.equal(false);
    });

    it("should return false if moves has duplicates", () => {
      const moves = [
        new Move(MoveData.Absorb),
        new Move(MoveData.Acid),
        new Move(MoveData.Acid),
      ];
      const result = PokemonValidator.validateMoves(moves);
      expect(result).to.be.equal(false);
    });

    it("should return true if moves has 1 move", () => {
      const moves = [new Move(MoveData.Absorb)];
      const result = PokemonValidator.validateMoves(moves);
      expect(result).to.be.equal(true);
    });

    it("should return true if moves has 2 moves", () => {
      const moves = [new Move(MoveData.Absorb), new Move(MoveData.Acid)];
      const result = PokemonValidator.validateMoves(moves);
      expect(result).to.be.equal(true);
    });

    it("should return true if moves has 3 moves", () => {
      const moves = [
        new Move(MoveData.Absorb),
        new Move(MoveData.Acid),
        new Move(MoveData.AcidArmor),
      ];
      const result = PokemonValidator.validateMoves(moves);
      expect(result).to.be.equal(true);
    });

    it("should return true if moves has 4 moves", () => {
      const moves = [
        new Move(MoveData.Absorb),
        new Move(MoveData.Acid),
        new Move(MoveData.AcidArmor),
        new Move(MoveData.Agility),
      ];
      const result = PokemonValidator.validateMoves(moves);
      expect(result).to.be.equal(true);
    });
  });

  describe("Validate", () => {
    it("should return false if one or more validations are returning false", () => {
      const result = PokemonValidator.validate(
        {
          baseStats: { attack: 10, def: 10, special: 10, speed: 5, hp: 10 },
          name: PokemonList.Abra,
          number: 100,
          expRateType: ExpRateType.Fast,
          type1: PokemonType.Psychic,
          type2: null,
          evolutionConditions: [],
        },
        {
          iv: { attack: 10, def: 10, special: 10, speed: 5, hp: 10 },
          ev: { attack: 10, def: 10, special: 10, speed: 5, hp: 10 },
        },
        {
          level: 100,
          exp: 100,
          currentHp: 2.3,
          moves: [new Move(MoveData.Absorb)],
        },
      );
      expect(result).to.be.equal(false);
    });

    it("should return true if all validations are true", () => {
      const result = PokemonValidator.validate(
        {
          baseStats: { attack: 10, def: 10, special: 10, speed: 5, hp: 10 },
          name: PokemonList.Abra,
          number: 100,
          expRateType: ExpRateType.Fast,
          type1: PokemonType.Psychic,
          type2: null,
          evolutionConditions: [],
        },
        {
          iv: { attack: 10, def: 10, special: 10, speed: 5, hp: 10 },
          ev: { attack: 10, def: 10, special: 10, speed: 5, hp: 10 },
        },
        {
          level: 100,
          exp: 100,
          currentHp: 3,
          moves: [new Move(MoveData.Absorb)],
        },
      );
      expect(result).to.be.equal(true);
    });
  });
});
