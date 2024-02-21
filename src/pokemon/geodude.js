import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Geodude extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Geodude, { level, iv, ev });
  }
}
