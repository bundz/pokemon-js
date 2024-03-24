import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Kangaskhan extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Kangaskhan, { level, iv, ev }, moves);
  }
}
