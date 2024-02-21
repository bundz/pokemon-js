import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Ekans extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Ekans, { level, iv, ev });
  }
}
