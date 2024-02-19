import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Hitmonchan extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Hitmonchan, { level, iv, ev });
  }
}
