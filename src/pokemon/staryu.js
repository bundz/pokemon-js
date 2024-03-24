import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Staryu extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Staryu, { level, iv, ev }, moves);
  }
}
