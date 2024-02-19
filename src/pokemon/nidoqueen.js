import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Nidoqueen extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Nidoqueen, { level, iv, ev });
  }
}
