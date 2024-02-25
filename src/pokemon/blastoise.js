import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Blastoise extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Blastoise, { level, iv, ev });
  }
}
