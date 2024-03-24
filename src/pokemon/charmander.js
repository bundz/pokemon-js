import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Charmander extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Charmander, { level, iv, ev }, moves);
  }
}
