import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Porygon extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Porygon, { level, iv, ev });
  }
}
