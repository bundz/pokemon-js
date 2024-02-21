import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Machamp extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Machamp, { level, iv, ev });
  }
}
