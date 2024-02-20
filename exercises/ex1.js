//Choose one of the starting pokemons.
//Create one in level 5
//With iv (15, 10, 12, 14, 10)
//With ev (0, 0, 0, 0, 0)
//Print the pokemon as follow:
//Bulbasaur - Level 5
//HP: {the resulting hp}
//ATTACK: {the resulting attack}
//DEF: {the resulting def}
//SPECIAL: {the resulting special}
//SPEED: {the resulting speed}

import { Bulbasaur } from "../src/pokemon/bulbasaur";

const iv = {
  hp: 15,
  attack: 10,
  def: 12,
  special: 14,
  speed: 10,
};

const ev = {
  hp: 0,
  attack: 0,
  def: 0,
  special: 0,
  speed: 0,
};

const bulbasaur = new Bulbasaur({ iv, ev, level: 14 });
