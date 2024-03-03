import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Seaking extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Seaking, { level, iv, ev });
  }
}
