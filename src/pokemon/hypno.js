import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Hypno extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Hypno, { level, iv, ev });
  }
}
