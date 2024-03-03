import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Golbat extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Golbat, { level, iv, ev });
  }
}
