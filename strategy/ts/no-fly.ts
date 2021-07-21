import { InterfaceFly } from "./interface-fly";

export class NoFly implements InterfaceFly {
  public fly(): string {
    return 'don\'t fly';
  }
}
