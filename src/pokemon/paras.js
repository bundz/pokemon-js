import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Paras extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Paras, { level, iv, ev });
  }
}
