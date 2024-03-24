import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Alakazam extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Alakazam, { level, iv, ev }, moves);
  }
}
