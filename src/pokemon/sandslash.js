import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Sandslash extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Sandslash, { level, iv, ev });
  }
}
