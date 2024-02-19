import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Wartortle extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Wartortle, { level, iv, ev });
  }
}
