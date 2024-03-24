import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Grimer extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Grimer, { level, iv, ev }, moves);
  }
}
