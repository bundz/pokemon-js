import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Koffing extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Koffing, { level, iv, ev });
  }
}
