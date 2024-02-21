import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Seadra extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Seadra, { level, iv, ev });
  }
}
