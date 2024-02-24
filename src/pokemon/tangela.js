import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Tangela extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Tangela, { level, iv, ev });
  }
}
