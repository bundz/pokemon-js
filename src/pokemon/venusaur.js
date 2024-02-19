import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Venusaur extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Venusaur, { level, iv, ev });
  }
}
