import { InterfaceEnemyShip } from "./InterfaceEnemyShip";

export interface InterfaceEnemyShipFactory {
  make(type: string): InterfaceEnemyShip;
}
