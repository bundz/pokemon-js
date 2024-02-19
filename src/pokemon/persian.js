import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Persian extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Persian, { level, iv, ev });
  }
}
