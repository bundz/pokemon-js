import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Fearow extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Fearow, { level, iv, ev });
  }
}
