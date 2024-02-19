import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Arcanine extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Arcanine, { level, iv, ev });
  }
}
