import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Electrode extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Electrode, { level, iv, ev }, moves);
  }
}
