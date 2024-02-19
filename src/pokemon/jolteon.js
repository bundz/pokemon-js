import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Jolteon extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Jolteon, { level, iv, ev });
  }
}
