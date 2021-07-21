
import { BigUFOEnemyShip } from "./BigUFOEnemyShip";
import { InterfaceEnemyShip } from "./InterfaceEnemyShip";
import { InterfaceEnemyShipFactory } from "./InterfaceEnemyShipFactory";
import { UFOEnemyShip } from "./UFOEnemyShip";

export class EnemyShipFactory implements InterfaceEnemyShipFactory {
  make(type: string): InterfaceEnemyShip {
    if (type === 'big') {
      return new BigUFOEnemyShip('100', '100');
    }

    return new UFOEnemyShip('25', '25');
  }
}
