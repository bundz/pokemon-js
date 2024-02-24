import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Golem extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Golem, { level, iv, ev });
  }
}
