import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Kakuna extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Kakuna, { level, iv, ev });
  }
}
