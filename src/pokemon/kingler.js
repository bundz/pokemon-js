import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Kingler extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Kingler, { level, iv, ev });
  }
}
