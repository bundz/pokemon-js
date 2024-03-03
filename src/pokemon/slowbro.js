import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Slowbro extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Slowbro, { level, iv, ev });
  }
}
