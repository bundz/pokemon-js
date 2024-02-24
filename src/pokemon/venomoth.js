import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Venomoth extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Venomoth, { level, iv, ev });
  }
}
