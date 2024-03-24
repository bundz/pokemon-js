import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Kakuna extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Kakuna, { level, iv, ev }, moves);
  }
}
