import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Tentacool extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Tentacool, { level, iv, ev }, moves);
  }
}
