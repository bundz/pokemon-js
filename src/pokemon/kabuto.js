import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Kabuto extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Kabuto, { level, iv, ev });
  }
}
