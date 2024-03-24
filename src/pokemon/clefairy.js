import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Clefairy extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Clefairy, { level, iv, ev }, moves);
  }
}
