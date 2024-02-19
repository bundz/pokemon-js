import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Dratini extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Dratini, { level, iv, ev });
  }
}
