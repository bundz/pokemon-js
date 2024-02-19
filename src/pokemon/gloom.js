import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Gloom extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Gloom, { level, iv, ev });
  }
}
