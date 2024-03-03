import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Cloyster extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Cloyster, { level, iv, ev });
  }
}
