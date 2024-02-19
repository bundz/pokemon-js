import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Weedle extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Weedle, { level, iv, ev });
  }
}
