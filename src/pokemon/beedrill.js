import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Beedrill extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Beedrill, { level, iv, ev });
  }
}
