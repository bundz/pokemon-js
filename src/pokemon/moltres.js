import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Moltres extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Moltres, { level, iv, ev });
  }
}
