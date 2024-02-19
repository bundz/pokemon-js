import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Bulbasaur extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Bulbasaur, { level, iv, ev });
  }
}
