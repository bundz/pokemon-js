import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Pidgeotto extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Pidgeotto, { level, iv, ev });
  }
}
