import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Beedrill extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Beedrill, { level, iv, ev }, moves);
  }
}
