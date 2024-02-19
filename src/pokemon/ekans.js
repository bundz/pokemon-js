import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Ekans extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Ekans, { level, iv, ev });
  }
}
