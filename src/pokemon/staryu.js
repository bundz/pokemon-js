import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Staryu extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Staryu, { level, iv, ev });
  }
}
