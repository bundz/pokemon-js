import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Machoke extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Machoke, { level, iv, ev });
  }
}
