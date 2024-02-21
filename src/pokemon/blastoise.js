import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Blastoise extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Blastoise, { level, iv, ev });
  }
}
