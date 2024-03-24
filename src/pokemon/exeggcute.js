import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Exeggcute extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Exeggcute, { level, iv, ev }, moves);
  }
}
