import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Farfetchd extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Farfetchd, { level, iv, ev });
  }
}
