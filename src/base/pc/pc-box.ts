import { Pokemon } from "../pokemon";
import { PCBoxSlot, IPCBox } from "./pc-box.type";

export class PCBox {
  private _name: string;
  private _slots: PCBoxSlot[];

  constructor(pcBox: IPCBox) {
    let slots = pcBox.slots;

    if (!slots) {
      slots = Array(20).fill(null);
    }

    if (slots.length !== 20) {
      throw new Error("PCBox length needs to be equal 12");
    }

    this._name = pcBox.name;
    this._slots = slots;
  }

  addToSlot(index: number, pokemon: Pokemon) {
    if (index > 19) {
      throw new Error("Slot out of range");
    }

    const slot = this._slots[index];

    if (slot) {
      throw new Error("Slot is not empty");
    }

    this._slots[index] = pokemon;
  }

  withdrawalFromSlot(index: number) {
    if (index > 19) {
      throw new Error("Slot out of range");
    }

    const slot = this._slots[index];

    if (!slot) {
      throw new Error("Slot is empty");
    }

    this._slots[index] = null;
    return slot;
  }

  addToFreeSlot(pokemon: Pokemon) {
    for (const [i, slot] of this._slots.entries()) {
      if (!slot) {
        this.addToSlot(i, pokemon);
        return true;
      }
    }

    return false;
  }

  get slots() {
    return this._slots;
  }

  get name() {
    return this._name;
  }
}
