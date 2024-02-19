import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Eevee extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Eevee, { level, iv, ev });
  }
}
