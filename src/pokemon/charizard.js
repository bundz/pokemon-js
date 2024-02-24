import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Charizard extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Charizard, { level, iv, ev });
  }
}
