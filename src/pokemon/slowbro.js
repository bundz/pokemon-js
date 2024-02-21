import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Slowbro extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Slowbro, { level, iv, ev });
  }
}
