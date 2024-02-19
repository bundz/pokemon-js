import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Blastoise extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Blastoise, { level, iv, ev });
  }
}
