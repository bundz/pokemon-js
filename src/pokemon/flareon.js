import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Flareon extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Flareon, { level, iv, ev });
  }
}
