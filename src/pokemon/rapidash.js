import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Rapidash extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Rapidash, { level, iv, ev });
  }
}
