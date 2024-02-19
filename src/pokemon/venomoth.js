import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Venomoth extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Venomoth, { level, iv, ev });
  }
}
