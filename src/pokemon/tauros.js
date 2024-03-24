import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Tauros extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Tauros, { level, iv, ev }, moves);
  }
}
