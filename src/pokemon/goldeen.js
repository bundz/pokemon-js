import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Goldeen extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Goldeen, { level, iv, ev });
  }
}
