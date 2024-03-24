import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Dratini extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Dratini, { level, iv, ev }, moves);
  }
}
