import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Rhyhorn extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Rhyhorn, { level, iv, ev });
  }
}
