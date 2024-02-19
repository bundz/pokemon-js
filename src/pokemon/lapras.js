import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Lapras extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Lapras, { level, iv, ev });
  }
}
