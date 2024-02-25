import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Venomoth extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Venomoth, { level, iv, ev });
  }
}
