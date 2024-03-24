import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Meowth extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Meowth, { level, iv, ev }, moves);
  }
}
