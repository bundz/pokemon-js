import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Clefable extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Clefable, { level, iv, ev }, moves);
  }
}
