import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class NidoranM extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.NidoranM, { level, iv, ev });
  }
}
