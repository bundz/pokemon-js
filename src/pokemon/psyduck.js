import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Psyduck extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Psyduck, { level, iv, ev });
  }
}
