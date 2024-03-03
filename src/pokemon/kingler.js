import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Kingler extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Kingler, { level, iv, ev });
  }
}
