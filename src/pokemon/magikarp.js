import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Magikarp extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Magikarp, { level, iv, ev }, moves);
  }
}
