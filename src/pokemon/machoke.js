import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Machoke extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Machoke, { level, iv, ev });
  }
}
