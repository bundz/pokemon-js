import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Pidgeot extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Pidgeot, { level, iv, ev });
  }
}
