import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Dugtrio extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Dugtrio, { level, iv, ev });
  }
}
