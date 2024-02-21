import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Growlithe extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Growlithe, { level, iv, ev });
  }
}
