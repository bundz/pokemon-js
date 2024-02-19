import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Marowak extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Marowak, { level, iv, ev });
  }
}
