import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Hitmonlee extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Hitmonlee, { level, iv, ev });
  }
}
