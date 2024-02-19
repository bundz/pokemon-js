import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Drowzee extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Drowzee, { level, iv, ev });
  }
}
