import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Weezing extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Weezing, { level, iv, ev });
  }
}
