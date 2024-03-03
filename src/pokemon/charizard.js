import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Charizard extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Charizard, { level, iv, ev });
  }
}
