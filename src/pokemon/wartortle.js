import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Wartortle extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Wartortle, { level, iv, ev });
  }
}
