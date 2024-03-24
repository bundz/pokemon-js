import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Oddish extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Oddish, { level, iv, ev }, moves);
  }
}
