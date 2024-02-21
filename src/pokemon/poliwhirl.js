import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Poliwhirl extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Poliwhirl, { level, iv, ev });
  }
}
