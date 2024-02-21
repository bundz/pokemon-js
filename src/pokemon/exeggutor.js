import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Exeggutor extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Exeggutor, { level, iv, ev });
  }
}
