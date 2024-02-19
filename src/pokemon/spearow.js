import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Spearow extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Spearow, { level, iv, ev });
  }
}
