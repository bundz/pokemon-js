import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Haunter extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Haunter, { level, iv, ev });
  }
}
