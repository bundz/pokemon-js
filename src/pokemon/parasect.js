import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Parasect extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Parasect, { level, iv, ev });
  }
}
