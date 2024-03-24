import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Gloom extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Gloom, { level, iv, ev }, moves);
  }
}
