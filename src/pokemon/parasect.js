import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Parasect extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Parasect, { level, iv, ev }, moves);
  }
}
