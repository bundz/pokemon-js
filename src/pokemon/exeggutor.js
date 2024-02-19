import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Exeggutor extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Exeggutor, { level, iv, ev });
  }
}
