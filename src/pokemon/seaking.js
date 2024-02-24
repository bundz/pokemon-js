import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Seaking extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Seaking, { level, iv, ev });
  }
}
