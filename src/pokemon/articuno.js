import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Articuno extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Articuno, { level, iv, ev });
  }
}
