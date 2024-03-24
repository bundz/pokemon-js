import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Golem extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Golem, { level, iv, ev }, moves);
  }
}
