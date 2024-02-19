import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Lickitung extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Lickitung, { level, iv, ev });
  }
}
