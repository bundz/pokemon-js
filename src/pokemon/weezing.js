import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Weezing extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Weezing, { level, iv, ev });
  }
}
