import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Tentacruel extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Tentacruel, { level, iv, ev });
  }
}
