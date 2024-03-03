import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Rattata extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Rattata, { level, iv, ev });
  }
}
