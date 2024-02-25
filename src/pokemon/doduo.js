import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Doduo extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Doduo, { level, iv, ev });
  }
}
