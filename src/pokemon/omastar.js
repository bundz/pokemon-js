import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Omastar extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Omastar, { level, iv, ev });
  }
}
