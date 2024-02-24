import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Muk extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Muk, { level, iv, ev });
  }
}
