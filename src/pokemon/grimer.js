import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Grimer extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Grimer, { level, iv, ev });
  }
}
