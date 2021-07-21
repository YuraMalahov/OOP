import { InterfaceFly } from "./interface-fly";

export abstract class AbstructAnimal {
  protected fly: InterfaceFly;

  public constructor(fly: InterfaceFly) {
    this.fly = fly;
  }

  public startFly(): string {
    return this.fly.fly();
  }
}
