import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Rapidash extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Rapidash, { level, iv, ev });
  }
}
