import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Nidorina extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Nidorina, { level, iv, ev });
  }
}
