import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Jigglypuff extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Jigglypuff, { level, iv, ev });
  }
}
