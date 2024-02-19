import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Slowpoke extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Slowpoke, { level, iv, ev });
  }
}
