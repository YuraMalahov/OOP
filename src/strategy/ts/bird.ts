import { AbstructAnimal } from "./abstruct-animal"
import { InterfaceFly } from "./interface-fly";

export class Bird extends AbstructAnimal {
  public constructor(fly: InterfaceFly) {
    super(fly);
  }
}