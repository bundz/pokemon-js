import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Muk extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Muk, { level, iv, ev }, moves);
  }
}
