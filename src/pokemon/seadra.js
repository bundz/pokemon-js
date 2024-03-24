import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Seadra extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Seadra, { level, iv, ev }, moves);
  }
}
