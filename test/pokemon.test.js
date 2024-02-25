import assert from "assert";
import { Pokemon } from "../src/base/pokemon.js";

describe("Pokemon", () => {
  context("when I create a new pokemon", () => {
    const pokemonData = {
      number: 1,
      name: "Bulba",
      type1: "Fire",
      type2: "",
      expRateType: "fast",
      currentHp: 0,
      baseHp: 5,
      baseAttack: 10,
      baseSpecial: 11,
      baseDef: 12,
      baseSpeed: 13,
    };

    const pokemonMoreData = {
      iv: {
        hp: 10,
        attack: 11,
        def: 12,
        special: 13,
        speed: 14,
      },
      ev: {
        hp: 10,
        attack: 11,
        def: 12,
        special: 13,
        speed: 14,
      },
    };

    const pokemon = new Pokemon(pokemonData, pokemonMoreData);

    it("should return the created pokemon", () => {
      assert.equal(pokemon.name, "Bulba");
      assert.equal(pokemon.baseHp, 5);
      assert.equal(pokemon.baseAttack, 10);
      assert.equal(pokemon.baseDef, 12);
      assert.equal(pokemon.baseSpecial, 11);
      assert.equal(pokemon.baseSpeed, 13);
      assert.equal(pokemon.type1, "Fire");
    });
  });
});
