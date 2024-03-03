import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Squirtle extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Squirtle, { level, iv, ev });
  }
}
