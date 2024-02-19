import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Pinsir extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Pinsir, { level, iv, ev });
  }
}
