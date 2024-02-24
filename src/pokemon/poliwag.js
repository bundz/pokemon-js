import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Poliwag extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Poliwag, { level, iv, ev });
  }
}
