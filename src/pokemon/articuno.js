import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Articuno extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Articuno, { level, iv, ev });
  }
}
