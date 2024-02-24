import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Charmeleon extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Charmeleon, { level, iv, ev });
  }
}
