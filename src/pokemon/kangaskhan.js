import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Kangaskhan extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Kangaskhan, { level, iv, ev });
  }
}
