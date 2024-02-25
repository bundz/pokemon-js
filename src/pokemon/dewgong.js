import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Dewgong extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Dewgong, { level, iv, ev });
  }
}
