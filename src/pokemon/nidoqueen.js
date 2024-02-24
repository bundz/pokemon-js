import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Nidoqueen extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Nidoqueen, { level, iv, ev });
  }
}
