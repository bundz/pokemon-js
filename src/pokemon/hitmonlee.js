import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Hitmonlee extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Hitmonlee, { level, iv, ev });
  }
}
