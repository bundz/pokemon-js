import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Pikachu extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Pikachu, { level, iv, ev });
  }
}
