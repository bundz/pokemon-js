import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Seel extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Seel, { level, iv, ev }, moves);
  }
}
