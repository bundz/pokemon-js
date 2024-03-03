import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Charmeleon extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Charmeleon, { level, iv, ev });
  }
}
