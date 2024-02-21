import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Weepinbell extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Weepinbell, { level, iv, ev });
  }
}
