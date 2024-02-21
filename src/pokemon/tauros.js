import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Tauros extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Tauros, { level, iv, ev });
  }
}
