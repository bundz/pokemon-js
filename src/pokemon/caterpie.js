import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Caterpie extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Caterpie, { level, iv, ev });
  }
}
