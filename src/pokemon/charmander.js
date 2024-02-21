import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Charmander extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Charmander, { level, iv, ev });
  }
}
