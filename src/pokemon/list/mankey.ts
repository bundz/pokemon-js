import {
  Pokemon,
  PokemonStatModifiers,
  PokemonState,
} from "../../base/pokemon";
import { PokemonData } from "../../../data/pokemon.data";

export class Mankey extends Pokemon {
  constructor(statModifiers: PokemonStatModifiers, state: PokemonState) {
    super(PokemonData.Mankey, statModifiers, state);
  }
}
