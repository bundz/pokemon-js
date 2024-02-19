import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Omastar extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Omastar, { level, iv, ev });
  }
}
