import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Onix extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Onix, { level, iv, ev });
  }
}
