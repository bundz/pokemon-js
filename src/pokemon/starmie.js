import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Starmie extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Starmie, { level, iv, ev });
  }
}
