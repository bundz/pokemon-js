import { expect } from "chai";
import { PCBox } from "../pc-box";
import { Pokemon } from "../../pokemon";
import { PokemonData } from "../../../../data/pokemon.data";
import { Thunderbolt } from "../../../moves/thunderbolt";
import { Tackle } from "../../../moves/tackle";

const createPokemon = () => {
  return new Pokemon(
    PokemonData.Pikachu,
    {
      iv: { attack: 8, def: 13, speed: 5, special: 9, hp: 7 },
      ev: {
        attack: 23140,
        def: 17280,
        speed: 24795,
        special: 19625,
        hp: 22850,
      },
    },
    {
      level: 81,
      exp: 531441,
      moves: [new Thunderbolt(), new Tackle()],
      currentHp: 100,
    },
  );
};

describe("PCBox", () => {
  describe("contructor", () => {
    it("should have 20 slots all empty when creating", () => {
      const pcbox = new PCBox({ name: "BOX1" });
      expect(pcbox.name).to.be.equals("BOX1");
      expect(pcbox.slots).to.have.lengthOf(20);

      for (const slot of pcbox.slots) {
        expect(slot).to.be.equals(null);
      }
    });

    it("when creating it with invalid size it should throw an error", () => {
      expect(() => new PCBox({ name: "BOX1", slots: [null] })).to.throw();
    });
  });

  describe("addToSlot", () => {
    it("when adding to valid slot it should work", () => {
      const pcbox = new PCBox({ name: "BOX1" });
      const pokemon = createPokemon();
      pcbox.addToSlot(0, pokemon);
      expect(pcbox.slots[0]).to.be.deep.equals(pokemon);
    });

    it("when adding to invalid slot (>20) it should throw an error", () => {
      const pcbox = new PCBox({ name: "BOX1" });
      const pokemon = createPokemon();
      expect(() => pcbox.addToSlot(21, pokemon)).to.throw();
    });

    it("when adding to invalid slot (<0) it should throw an error", () => {
      const pcbox = new PCBox({ name: "BOX1" });
      const pokemon = createPokemon();
      expect(() => pcbox.addToSlot(-1, pokemon)).to.throw();
    });

    it("when adding to invalid slot (1.2) it should throw an error", () => {
      const pcbox = new PCBox({ name: "BOX1" });
      const pokemon = createPokemon();
      expect(() => pcbox.addToSlot(1.2, pokemon)).to.throw();
    });
  });

  describe("withdrawalFromSlot", () => {
    it("when withdrawing from valid slot it should work", () => {
      const pcbox = new PCBox({ name: "BOX1" });
      const pokemon = createPokemon();
      pcbox.addToSlot(0, pokemon);
      const pokemon2 = pcbox.withdrawalFromSlot(0);
      expect(pokemon2).to.be.deep.equals(pokemon);
    });

    it("when withdrawing from invalid slot (>20) it should throw an error", () => {
      const pcbox = new PCBox({ name: "BOX1" });
      expect(() => pcbox.withdrawalFromSlot(21)).to.throw();
    });

    it("when withdrawing from invalid slot (<0) it should throw an error", () => {
      const pcbox = new PCBox({ name: "BOX1" });
      expect(() => pcbox.withdrawalFromSlot(-1)).to.throw();
    });

    it("when withdrawing from invalid slot (1.2) it should throw an error", () => {
      const pcbox = new PCBox({ name: "BOX1" });
      expect(() => pcbox.withdrawalFromSlot(1.2)).to.throw();
    });
  });

  describe("addToFreeSlot", () => {
    it("should return true when there all slots are empty", () => {
      const pcbox = new PCBox({ name: "BOX1" });
      const pokemon = createPokemon();
      const result = pcbox.addToFreeSlot(pokemon);
      expect(result).to.be.equals(true);
      expect(pcbox.slots[0]).to.deep.equals(pokemon);
    });

    it("should return true when there is only one slots empty", () => {
      const slots: Pokemon[] = [];

      for (let i = 0; i < 19; i++) {
        slots.push(createPokemon());
      }

      const pcbox = new PCBox({ name: "BOX1", slots: [...slots, null] });
      const pokemon = createPokemon();
      const result = pcbox.addToFreeSlot(pokemon);
      expect(result).to.be.equals(true);
      expect(pcbox.slots[19]).to.deep.equals(pokemon);
    });

    it("should return false when box is full", () => {
      const slots: Pokemon[] = [];

      for (let i = 0; i < 20; i++) {
        slots.push(createPokemon());
      }

      const pcbox = new PCBox({ name: "BOX1", slots: [...slots] });
      const pokemon = createPokemon();
      const result = pcbox.addToFreeSlot(pokemon);
      expect(result).to.be.equals(false);
    });
  });
});
