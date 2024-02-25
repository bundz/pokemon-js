import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Poliwrath extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Poliwrath, { level, iv, ev });
  }
}
