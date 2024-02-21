import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Tentacruel extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Tentacruel, { level, iv, ev });
  }
}
