import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Kangaskhan extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Kangaskhan, { level, iv, ev });
  }
}
