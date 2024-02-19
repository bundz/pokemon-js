import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Golduck extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Golduck, { level, iv, ev });
  }
}
