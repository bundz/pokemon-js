import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Articuno extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Articuno, { level, iv, ev });
  }
}
