import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Alakazam extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Alakazam, { level, iv, ev });
  }
}
