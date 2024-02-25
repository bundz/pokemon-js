import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Hypno extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Hypno, { level, iv, ev });
  }
}
