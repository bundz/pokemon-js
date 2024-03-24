import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Poliwhirl extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Poliwhirl, { level, iv, ev }, moves);
  }
}
