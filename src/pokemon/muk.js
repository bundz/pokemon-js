import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Muk extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Muk, { level, iv, ev });
  }
}
