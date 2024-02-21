import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Pidgeotto extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Pidgeotto, { level, iv, ev });
  }
}
