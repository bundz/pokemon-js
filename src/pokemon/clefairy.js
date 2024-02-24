import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Clefairy extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Clefairy, { level, iv, ev });
  }
}
