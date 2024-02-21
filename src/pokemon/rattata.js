import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Rattata extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Rattata, { level, iv, ev });
  }
}
