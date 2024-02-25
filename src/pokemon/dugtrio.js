import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Dugtrio extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Dugtrio, { level, iv, ev });
  }
}
