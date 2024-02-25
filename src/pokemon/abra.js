import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Abra extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Abra, { level, iv, ev });
  }
}
