import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Zubat extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Zubat, { level, iv, ev });
  }
}
