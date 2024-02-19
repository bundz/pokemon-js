import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Vulpix extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Vulpix, { level, iv, ev });
  }
}
