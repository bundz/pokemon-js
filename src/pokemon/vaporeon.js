import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Vaporeon extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Vaporeon, { level, iv, ev });
  }
}
