import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Kingler extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Kingler, { level, iv, ev });
  }
}
