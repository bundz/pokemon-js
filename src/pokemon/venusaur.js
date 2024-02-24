import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Venusaur extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Venusaur, { level, iv, ev });
  }
}
