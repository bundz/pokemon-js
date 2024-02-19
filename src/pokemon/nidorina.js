import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Nidorina extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Nidorina, { level, iv, ev });
  }
}
