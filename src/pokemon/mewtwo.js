import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Mewtwo extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Mewtwo, { level, iv, ev });
  }
}
