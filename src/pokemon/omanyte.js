import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Omanyte extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Omanyte, { level, iv, ev });
  }
}
