import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Spearow extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Spearow, { level, iv, ev });
  }
}
