import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Oddish extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Oddish, { level, iv, ev });
  }
}
