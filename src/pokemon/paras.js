import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Paras extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Paras, { level, iv, ev });
  }
}
