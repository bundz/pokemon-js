import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Tangela extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Tangela, { level, iv, ev });
  }
}
