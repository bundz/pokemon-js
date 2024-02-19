import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Poliwhirl extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Poliwhirl, { level, iv, ev });
  }
}
