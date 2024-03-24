import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Golduck extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Golduck, { level, iv, ev }, moves);
  }
}
