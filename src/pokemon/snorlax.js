import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Snorlax extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Snorlax, { level, iv, ev });
  }
}
