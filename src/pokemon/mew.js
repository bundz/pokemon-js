import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Mew extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Mew, { level, iv, ev });
  }
}
