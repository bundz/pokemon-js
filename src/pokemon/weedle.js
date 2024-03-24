import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Weedle extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Weedle, { level, iv, ev }, moves);
  }
}
