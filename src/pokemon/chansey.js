import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Chansey extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Chansey, { level, iv, ev });
  }
}
