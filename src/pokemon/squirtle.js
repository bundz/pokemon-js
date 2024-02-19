import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Squirtle extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Squirtle, { level, iv, ev });
  }
}
