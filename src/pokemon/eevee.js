import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Eevee extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Eevee, { level, iv, ev });
  }
}
