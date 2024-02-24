import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Snorlax extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Snorlax, { level, iv, ev });
  }
}
