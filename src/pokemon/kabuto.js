import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Kabuto extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Kabuto, { level, iv, ev });
  }
}
