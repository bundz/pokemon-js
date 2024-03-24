import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Paras extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Paras, { level, iv, ev }, moves);
  }
}
