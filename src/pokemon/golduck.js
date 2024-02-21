import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Golduck extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Golduck, { level, iv, ev });
  }
}
