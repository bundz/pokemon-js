import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Shellder extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Shellder, { level, iv, ev });
  }
}
