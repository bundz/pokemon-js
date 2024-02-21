import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Raichu extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Raichu, { level, iv, ev });
  }
}
