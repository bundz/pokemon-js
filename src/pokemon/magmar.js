import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Magmar extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Magmar, { level, iv, ev });
  }
}
