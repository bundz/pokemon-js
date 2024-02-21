import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Scyther extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Scyther, { level, iv, ev });
  }
}
