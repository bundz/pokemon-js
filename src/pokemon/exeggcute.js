import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Exeggcute extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Exeggcute, { level, iv, ev });
  }
}
