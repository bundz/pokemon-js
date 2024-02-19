import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Electabuzz extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Electabuzz, { level, iv, ev });
  }
}
