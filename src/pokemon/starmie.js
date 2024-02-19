import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Starmie extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Starmie, { level, iv, ev });
  }
}
