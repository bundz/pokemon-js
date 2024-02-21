import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Jolteon extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Jolteon, { level, iv, ev });
  }
}
