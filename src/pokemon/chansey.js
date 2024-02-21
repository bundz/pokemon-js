import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Chansey extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Chansey, { level, iv, ev });
  }
}
