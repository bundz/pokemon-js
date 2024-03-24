import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Slowpoke extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Slowpoke, { level, iv, ev }, moves);
  }
}
