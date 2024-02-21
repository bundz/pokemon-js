import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Voltorb extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Voltorb, { level, iv, ev });
  }
}
