import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Arbok extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Arbok, { level, iv, ev }, moves);
  }
}
