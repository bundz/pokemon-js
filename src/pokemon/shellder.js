import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Shellder extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Shellder, { level, iv, ev });
  }
}
