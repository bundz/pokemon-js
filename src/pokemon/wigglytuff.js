import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Wigglytuff extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Wigglytuff, { level, iv, ev }, moves);
  }
}
