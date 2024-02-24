import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Golbat extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Golbat, { level, iv, ev });
  }
}
