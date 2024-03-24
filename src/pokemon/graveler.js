import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Graveler extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Graveler, { level, iv, ev }, moves);
  }
}
