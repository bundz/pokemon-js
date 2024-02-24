import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Vaporeon extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Vaporeon, { level, iv, ev });
  }
}
