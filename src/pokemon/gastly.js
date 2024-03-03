import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Gastly extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Gastly, { level, iv, ev });
  }
}
