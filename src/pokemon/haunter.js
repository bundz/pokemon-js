import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Haunter extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Haunter, { level, iv, ev }, moves);
  }
}
