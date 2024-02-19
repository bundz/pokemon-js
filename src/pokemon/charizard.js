import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Charizard extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Charizard, { level, iv, ev });
  }
}
