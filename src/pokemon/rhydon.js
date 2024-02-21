import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Rhydon extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Rhydon, { level, iv, ev });
  }
}
