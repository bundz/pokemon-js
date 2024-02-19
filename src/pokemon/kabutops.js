import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Kabutops extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Kabutops, { level, iv, ev });
  }
}
