import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Kakuna extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Kakuna, { level, iv, ev });
  }
}
