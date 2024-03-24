import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Tangela extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Tangela, { level, iv, ev }, moves);
  }
}
