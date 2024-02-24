import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Rhyhorn extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Rhyhorn, { level, iv, ev });
  }
}
