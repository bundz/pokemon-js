import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Rhydon extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Rhydon, { level, iv, ev });
  }
}
