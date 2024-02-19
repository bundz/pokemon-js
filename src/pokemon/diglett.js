import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Diglett extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Diglett, { level, iv, ev });
  }
}
