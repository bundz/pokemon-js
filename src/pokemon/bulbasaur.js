import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Bulbasaur extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Bulbasaur, { level, iv, ev });
  }
}
