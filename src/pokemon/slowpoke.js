import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Slowpoke extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Slowpoke, { level, iv, ev });
  }
}
