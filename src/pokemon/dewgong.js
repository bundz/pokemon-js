import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Dewgong extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Dewgong, { level, iv, ev });
  }
}
