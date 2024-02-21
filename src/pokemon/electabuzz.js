import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Electabuzz extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Electabuzz, { level, iv, ev });
  }
}
