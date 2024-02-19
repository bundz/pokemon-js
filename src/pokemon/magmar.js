import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Magmar extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Magmar, { level, iv, ev });
  }
}
