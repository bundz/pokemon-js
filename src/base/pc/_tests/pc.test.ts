import { expect } from "chai";
import { PC } from "../pc";
import { IPCBox, PCBoxSlot } from "../pc-box.type";
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

describe("PC", () => {
  describe("constructor", () => {
    it("when creating PC without PCBox it should create 20 PCBox", () => {
      const pc = new PC();
      expect(pc.boxes).to.have.lengthOf(12);
    });

    it("when creating PC with empty array of PCBox it should throw", () => {
      expect(() => new PC([])).to.throw();
    });

    it("when creating PC with more than 12 boxes it should throw", () => {
      const boxes: IPCBox[] = [];

      for (let i = 0; i < 13; i++) {
        boxes.push({ name: `BOX${i}` });
      }

      expect(() => new PC(boxes)).to.throw();
    });

    it("when creating PC with exactly than 12 boxes it should work", () => {
      const boxes: IPCBox[] = [];

      for (let i = 0; i < 12; i++) {
        boxes.push({ name: `BOX${i}` });
      }

      const pc = new PC(boxes);

      for (const [index, box] of pc.boxes.entries()) {
        expect(box.name).to.be.equals(`BOX${index}`);
        expect(box.slots).to.have.lengthOf(20);
      }
    });
  });

  describe("addPokemon", () => {
    it("when adding pokemon to with all empty boxes it should return true", () => {
      const pc = new PC();
      const pokemon = createPokemon();
      const result = pc.addPokemon(pokemon);
      expect(result).to.be.equals(true);
      expect(pc.boxes[0].slots[0]).to.be.deep.equal(pokemon);
    });

    it("when adding pokemon to with all boxes full it should return false", () => {
      const boxes: IPCBox[] = [];

      for (let i = 0; i < 12; i++) {
        const slots: PCBoxSlot[] = [];

        for (let j = 0; j < 20; j++) {
          slots.push(createPokemon());
        }

        boxes.push({ name: `BOX${i}`, slots });
      }

      const pc = new PC(boxes);
      const pokemon = createPokemon();
      const result = pc.addPokemon(pokemon);
      expect(result).to.be.equals(false);
    });
  });
});
