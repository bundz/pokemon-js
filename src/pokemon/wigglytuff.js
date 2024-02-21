import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Wigglytuff extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Wigglytuff, { level, iv, ev });
  }
}
