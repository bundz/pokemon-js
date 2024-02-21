import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Haunter extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Haunter, { level, iv, ev });
  }
}
