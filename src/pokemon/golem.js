import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Golem extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Golem, { level, iv, ev });
  }
}
