import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Magneton extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Magneton, { level, iv, ev }, moves);
  }
}
