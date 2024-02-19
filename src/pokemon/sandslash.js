import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Sandslash extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Sandslash, { level, iv, ev });
  }
}
