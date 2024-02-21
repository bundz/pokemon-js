import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Weedle extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Weedle, { level, iv, ev });
  }
}
