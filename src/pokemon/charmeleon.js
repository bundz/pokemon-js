import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Charmeleon extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Charmeleon, { level, iv, ev });
  }
}
