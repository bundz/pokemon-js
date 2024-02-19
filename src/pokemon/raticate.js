import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Raticate extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Raticate, { level, iv, ev });
  }
}
