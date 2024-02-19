import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Gastly extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Gastly, { level, iv, ev });
  }
}
