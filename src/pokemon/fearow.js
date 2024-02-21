import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Fearow extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Fearow, { level, iv, ev });
  }
}
