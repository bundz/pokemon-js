import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Magnemite extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Magnemite, { level, iv, ev });
  }
}
