import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Horsea extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Horsea, { level, iv, ev });
  }
}
