import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Rhyhorn extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Rhyhorn, { level, iv, ev }, moves);
  }
}
