import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Seel extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Seel, { level, iv, ev });
  }
}
