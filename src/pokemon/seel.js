import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Seel extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Seel, { level, iv, ev });
  }
}
