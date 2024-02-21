import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Graveler extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Graveler, { level, iv, ev });
  }
}
