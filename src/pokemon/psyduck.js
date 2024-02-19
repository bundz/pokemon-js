import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Psyduck extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Psyduck, { level, iv, ev });
  }
}
