import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Abra extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Abra, { level, iv, ev });
  }
}
