import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Ivysaur extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Ivysaur, { level, iv, ev });
  }
}
