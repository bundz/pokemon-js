import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Horsea extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Horsea, { level, iv, ev });
  }
}
