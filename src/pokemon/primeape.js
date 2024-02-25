import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Primeape extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Primeape, { level, iv, ev });
  }
}
