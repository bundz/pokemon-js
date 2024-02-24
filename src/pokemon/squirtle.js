import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Squirtle extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Squirtle, { level, iv, ev });
  }
}
