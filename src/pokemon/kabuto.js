import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Kabuto extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Kabuto, { level, iv, ev });
  }
}
