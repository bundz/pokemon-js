import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Gloom extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Gloom, { level, iv, ev });
  }
}
