import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Cloyster extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Cloyster, { level, iv, ev });
  }
}
