import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Beedrill extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Beedrill, { level, iv, ev });
  }
}
