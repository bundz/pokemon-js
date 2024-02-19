import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Staryu extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Staryu, { level, iv, ev });
  }
}
