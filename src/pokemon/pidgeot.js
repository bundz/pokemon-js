import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Pidgeot extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Pidgeot, { level, iv, ev }, moves);
  }
}
