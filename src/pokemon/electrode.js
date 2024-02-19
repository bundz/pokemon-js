import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Electrode extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Electrode, { level, iv, ev });
  }
}
