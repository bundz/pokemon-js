import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Dodrio extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Dodrio, { level, iv, ev });
  }
}
