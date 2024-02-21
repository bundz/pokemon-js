import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Koffing extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Koffing, { level, iv, ev });
  }
}
