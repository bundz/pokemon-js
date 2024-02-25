import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Farfetchd extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Farfetchd, { level, iv, ev });
  }
}
