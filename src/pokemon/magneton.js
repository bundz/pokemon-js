import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Magneton extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Magneton, { level, iv, ev });
  }
}
