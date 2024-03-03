import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class NidoranF extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.NidoranF, { level, iv, ev });
  }
}
