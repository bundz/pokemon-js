import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Vileplume extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Vileplume, { level, iv, ev }, moves);
  }
}
