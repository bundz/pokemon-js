import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Ninetales extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Ninetales, { level, iv, ev });
  }
}
