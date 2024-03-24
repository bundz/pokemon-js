import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Vaporeon extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Vaporeon, { level, iv, ev }, moves);
  }
}
