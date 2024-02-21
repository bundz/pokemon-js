import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Dragonair extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Dragonair, { level, iv, ev });
  }
}
