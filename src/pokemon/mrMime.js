import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class MrMime extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.MrMime, { level, iv, ev }, moves);
  }
}
