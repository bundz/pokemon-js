import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Wigglytuff extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Wigglytuff, { level, iv, ev });
  }
}
