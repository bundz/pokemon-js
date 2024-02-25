import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Weezing extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Weezing, { level, iv, ev });
  }
}
