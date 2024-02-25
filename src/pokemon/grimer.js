import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Grimer extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Grimer, { level, iv, ev });
  }
}
