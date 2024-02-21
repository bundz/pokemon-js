import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Primeape extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Primeape, { level, iv, ev });
  }
}
