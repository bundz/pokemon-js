import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Pinsir extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Pinsir, { level, iv, ev });
  }
}
