import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Jigglypuff extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Jigglypuff, { level, iv, ev });
  }
}
