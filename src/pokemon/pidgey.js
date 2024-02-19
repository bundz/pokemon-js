import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Pidgey extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Pidgey, { level, iv, ev });
  }
}
