import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Sandslash extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Sandslash, { level, iv, ev }, moves);
  }
}
