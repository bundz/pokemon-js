import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Jigglypuff extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Jigglypuff, { level, iv, ev });
  }
}
