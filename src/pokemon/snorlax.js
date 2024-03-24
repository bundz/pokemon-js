import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Snorlax extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Snorlax, { level, iv, ev }, moves);
  }
}
