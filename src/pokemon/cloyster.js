import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Cloyster extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Cloyster, { level, iv, ev });
  }
}
