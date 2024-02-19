import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Caterpie extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Caterpie, { level, iv, ev });
  }
}
