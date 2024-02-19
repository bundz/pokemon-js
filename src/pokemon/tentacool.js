import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Tentacool extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Tentacool, { level, iv, ev });
  }
}
