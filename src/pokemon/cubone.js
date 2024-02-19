import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Cubone extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Cubone, { level, iv, ev });
  }
}
