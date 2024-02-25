import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Pidgey extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Pidgey, { level, iv, ev });
  }
}
