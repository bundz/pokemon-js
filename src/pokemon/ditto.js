import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Ditto extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Ditto, { level, iv, ev });
  }
}
