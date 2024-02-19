import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Vileplume extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Vileplume, { level, iv, ev });
  }
}
