import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Gyarados extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Gyarados, { level, iv, ev });
  }
}
