import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Moltres extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Moltres, { level, iv, ev });
  }
}
