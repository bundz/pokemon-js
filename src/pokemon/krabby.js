import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Krabby extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Krabby, { level, iv, ev });
  }
}
