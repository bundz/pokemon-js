import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Persian extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Persian, { level, iv, ev });
  }
}
