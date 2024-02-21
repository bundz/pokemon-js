import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Omanyte extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Omanyte, { level, iv, ev });
  }
}
