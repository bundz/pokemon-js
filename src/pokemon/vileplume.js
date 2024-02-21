import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Vileplume extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Vileplume, { level, iv, ev });
  }
}
