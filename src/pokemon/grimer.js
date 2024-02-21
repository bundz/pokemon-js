import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Grimer extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Grimer, { level, iv, ev });
  }
}
