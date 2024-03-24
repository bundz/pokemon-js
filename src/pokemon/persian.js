import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Persian extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Persian, { level, iv, ev }, moves);
  }
}
