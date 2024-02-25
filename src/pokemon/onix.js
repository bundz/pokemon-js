import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Onix extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Onix, { level, iv, ev });
  }
}
