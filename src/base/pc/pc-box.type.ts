import { Pokemon } from "../pokemon";

export type PCBoxSlot = Pokemon | null;

export interface IPCBox {
  slots: PCBoxSlot[];
  name: string;
}
