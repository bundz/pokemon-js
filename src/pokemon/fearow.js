import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Fearow extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Fearow, { level, iv, ev });
  }
}
