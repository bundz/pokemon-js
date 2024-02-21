import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Dodrio extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Dodrio, { level, iv, ev });
  }
}
