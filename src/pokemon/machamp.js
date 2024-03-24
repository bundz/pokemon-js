import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Machamp extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Machamp, { level, iv, ev }, moves);
  }
}
