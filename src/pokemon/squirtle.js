import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Squirtle extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Squirtle, { level, iv, ev }, moves);
  }
}
