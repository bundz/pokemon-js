import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Hitmonlee extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Hitmonlee, { level, iv, ev }, moves);
  }
}
