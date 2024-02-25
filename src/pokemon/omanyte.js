import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Omanyte extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Omanyte, { level, iv, ev });
  }
}
