import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Zapdos extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Zapdos, { level, iv, ev });
  }
}
