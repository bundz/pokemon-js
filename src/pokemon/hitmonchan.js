import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Hitmonchan extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Hitmonchan, { level, iv, ev });
  }
}
