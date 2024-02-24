import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Diglett extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Diglett, { level, iv, ev });
  }
}
