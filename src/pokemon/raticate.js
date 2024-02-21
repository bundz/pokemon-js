import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Raticate extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Raticate, { level, iv, ev });
  }
}
