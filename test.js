import { Pikachu } from "./src/pokemon/pikachu.js";
import { Thunder } from "./src/moves/thunder.js";
import { QuickAttack } from "./src/moves/quickAttack.js";

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

const thunder = new Thunder();
const quickAttack = new QuickAttack();

const pikachu = new Pikachu({ level: 81, iv, ev }, [thunder, quickAttack]);

console.log(pikachu.moves);
