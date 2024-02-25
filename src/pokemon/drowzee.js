import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Drowzee extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Drowzee, { level, iv, ev });
  }
}
