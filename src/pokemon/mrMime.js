import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class MrMime extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.MrMime, { level, iv, ev });
  }
}
