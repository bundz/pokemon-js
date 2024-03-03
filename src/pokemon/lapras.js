import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Lapras extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Lapras, { level, iv, ev });
  }
}
