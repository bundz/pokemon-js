import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Rhydon extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Rhydon, { level, iv, ev }, moves);
  }
}
