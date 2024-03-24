import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Marowak extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Marowak, { level, iv, ev }, moves);
  }
}
