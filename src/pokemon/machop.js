import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Machop extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Machop, { level, iv, ev }, moves);
  }
}
