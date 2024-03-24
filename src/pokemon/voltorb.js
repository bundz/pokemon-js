import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Voltorb extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Voltorb, { level, iv, ev }, moves);
  }
}
