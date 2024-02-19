import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Pidgeot extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Pidgeot, { level, iv, ev });
  }
}
