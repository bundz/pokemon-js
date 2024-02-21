import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Mankey extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Mankey, { level, iv, ev });
  }
}
