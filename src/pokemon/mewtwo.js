import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Mewtwo extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Mewtwo, { level, iv, ev }, moves);
  }
}
