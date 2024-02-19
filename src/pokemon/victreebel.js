import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Victreebel extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Victreebel, { level, iv, ev });
  }
}
