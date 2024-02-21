import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Pikachu extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Pikachu, { level, iv, ev });
  }
}
