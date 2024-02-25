import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Seadra extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Seadra, { level, iv, ev });
  }
}
