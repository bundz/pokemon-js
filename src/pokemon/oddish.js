import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Oddish extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Oddish, { level, iv, ev });
  }
}
