import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Porygon extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Porygon, { level, iv, ev });
  }
}
