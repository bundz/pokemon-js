import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Eevee extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Eevee, { level, iv, ev });
  }
}
