import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Mew extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Mew, { level, iv, ev });
  }
}
