import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Growlithe extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Growlithe, { level, iv, ev }, moves);
  }
}
