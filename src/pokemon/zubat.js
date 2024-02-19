import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Zubat extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Zubat, { level, iv, ev });
  }
}
