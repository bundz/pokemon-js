import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Charmander extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Charmander, { level, iv, ev });
  }
}
