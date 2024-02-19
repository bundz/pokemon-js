import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Meowth extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Meowth, { level, iv, ev });
  }
}
