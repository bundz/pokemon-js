import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Primeape extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Primeape, { level, iv, ev });
  }
}
