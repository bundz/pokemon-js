import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Koffing extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Koffing, { level, iv, ev }, moves);
  }
}
