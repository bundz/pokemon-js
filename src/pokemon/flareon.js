import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Flareon extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Flareon, { level, iv, ev });
  }
}
