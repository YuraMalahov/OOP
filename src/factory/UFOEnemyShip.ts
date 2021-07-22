import { InterfaceEnemyShip } from "./InterfaceEnemyShip";

export class UFOEnemyShip implements InterfaceEnemyShip{
  d: string;
  s: string;

  constructor(damage: string, speed: string) {
    this.d = damage;
    this.s = speed;
  }

  damage(): string {
    return this.d;
  }

  speed(): string {
    return this.s;
  }
}