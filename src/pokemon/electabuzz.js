import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Electabuzz extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Electabuzz, { level, iv, ev }, moves);
  }
}
