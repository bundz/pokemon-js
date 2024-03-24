import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Raticate extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Raticate, { level, iv, ev }, moves);
  }
}
