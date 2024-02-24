import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Machop extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Machop, { level, iv, ev });
  }
}
