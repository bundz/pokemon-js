import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Ninetales extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Ninetales, { level, iv, ev });
  }
}
