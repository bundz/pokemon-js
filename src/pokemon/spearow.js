import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Spearow extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Spearow, { level, iv, ev });
  }
}
