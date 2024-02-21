import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Lickitung extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Lickitung, { level, iv, ev });
  }
}
