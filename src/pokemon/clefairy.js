import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Clefairy extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Clefairy, { level, iv, ev });
  }
}
