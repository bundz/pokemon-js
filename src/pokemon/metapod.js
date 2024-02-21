import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Metapod extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Metapod, { level, iv, ev });
  }
}
