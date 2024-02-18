import { Pikachu } from "./src/pokemon/pikachu.js";

const iv = {
  hp: 7,
  attack: 8,
  def: 13,
  special: 9,
  speed: 5,
};

const ev = {
  hp: 22850,
  attack: 23140,
  def: 17280,
  special: 19625,
  speed: 24795,
};

const pikachu = new Pikachu({ level: 81, iv, ev });

console.log(pikachu.hp);
