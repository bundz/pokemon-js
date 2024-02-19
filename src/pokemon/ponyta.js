import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Ponyta extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Ponyta, { level, iv, ev });
  }
}
