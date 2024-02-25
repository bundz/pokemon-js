import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Ninetales extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Ninetales, { level, iv, ev });
  }
}
