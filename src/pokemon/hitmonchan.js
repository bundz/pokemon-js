import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Hitmonchan extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Hitmonchan, { level, iv, ev });
  }
}
