import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Pidgeotto extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Pidgeotto, { level, iv, ev });
  }
}
