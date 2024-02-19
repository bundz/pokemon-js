import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Scyther extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Scyther, { level, iv, ev });
  }
}
