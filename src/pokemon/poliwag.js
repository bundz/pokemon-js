import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Poliwag extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Poliwag, { level, iv, ev });
  }
}
