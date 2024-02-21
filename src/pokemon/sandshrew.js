import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Sandshrew extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Sandshrew, { level, iv, ev });
  }
}
