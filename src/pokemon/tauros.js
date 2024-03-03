import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Tauros extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Tauros, { level, iv, ev });
  }
}
