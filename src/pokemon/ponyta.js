import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Ponyta extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Ponyta, { level, iv, ev });
  }
}
