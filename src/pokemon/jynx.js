import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Jynx extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Jynx, { level, iv, ev });
  }
}
