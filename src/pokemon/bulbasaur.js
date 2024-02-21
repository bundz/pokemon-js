import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Bulbasaur extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Bulbasaur, { level, iv, ev });
  }
}
