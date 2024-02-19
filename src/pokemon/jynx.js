import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Jynx extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Jynx, { level, iv, ev });
  }
}
