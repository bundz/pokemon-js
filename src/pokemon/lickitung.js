import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Lickitung extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Lickitung, { level, iv, ev }, moves);
  }
}
