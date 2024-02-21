import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Nidorina extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Nidorina, { level, iv, ev });
  }
}
