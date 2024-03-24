import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Starmie extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Starmie, { level, iv, ev }, moves);
  }
}
