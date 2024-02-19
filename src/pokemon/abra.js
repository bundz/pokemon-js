import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Abra extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Abra, { level, iv, ev });
  }
}
