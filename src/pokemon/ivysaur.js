import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Ivysaur extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Ivysaur, { level, iv, ev });
  }
}
