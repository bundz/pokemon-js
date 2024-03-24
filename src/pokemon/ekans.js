import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Ekans extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Ekans, { level, iv, ev }, moves);
  }
}
