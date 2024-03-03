import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Moltres extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Moltres, { level, iv, ev });
  }
}
