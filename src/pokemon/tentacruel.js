import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Tentacruel extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Tentacruel, { level, iv, ev });
  }
}
