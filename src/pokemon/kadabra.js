import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Kadabra extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Kadabra, { level, iv, ev });
  }
}
