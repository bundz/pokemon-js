import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Gengar extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Gengar, { level, iv, ev });
  }
}
