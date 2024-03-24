import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Abra extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Abra, { level, iv, ev }, moves);
  }
}
