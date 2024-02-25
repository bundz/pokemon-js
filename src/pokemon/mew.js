import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Mew extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Mew, { level, iv, ev });
  }
}
