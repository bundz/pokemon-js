import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Butterfree extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Butterfree, { level, iv, ev });
  }
}
