import { InterfaceFly } from "./interface-fly";

export class Fly implements InterfaceFly {
  public fly(): string {
    return 'flying high';
  }
}
