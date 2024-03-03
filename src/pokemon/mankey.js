import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Mankey extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Mankey, { level, iv, ev });
  }
}
