import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Zubat extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Zubat, { level, iv, ev }, moves);
  }
}
