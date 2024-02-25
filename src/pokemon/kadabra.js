import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Kadabra extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Kadabra, { level, iv, ev });
  }
}
