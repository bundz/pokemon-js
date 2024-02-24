import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Gastly extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Gastly, { level, iv, ev });
  }
}
