import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Golbat extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Golbat, { level, iv, ev });
  }
}
