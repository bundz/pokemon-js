import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Clefable extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Clefable, { level, iv, ev });
  }
}
