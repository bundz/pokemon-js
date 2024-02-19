import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Goldeen extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Goldeen, { level, iv, ev });
  }
}
