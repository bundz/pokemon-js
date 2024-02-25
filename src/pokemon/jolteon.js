import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Jolteon extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Jolteon, { level, iv, ev });
  }
}
