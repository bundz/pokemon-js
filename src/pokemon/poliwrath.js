import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Poliwrath extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Poliwrath, { level, iv, ev });
  }
}
