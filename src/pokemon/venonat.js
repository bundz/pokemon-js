import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Venonat extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Venonat, { level, iv, ev });
  }
}
