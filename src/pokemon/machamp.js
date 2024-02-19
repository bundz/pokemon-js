import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Machamp extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Machamp, { level, iv, ev });
  }
}
