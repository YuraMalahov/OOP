import { Visitable } from "./visitable";
import { Visitor } from "./visitor";

export class Liquor implements Visitable {
  private price: number;
  private name: string;

  constructor(price: number, name: string) {
    this.price = price;
    this.name = name;
  }

  public accept(visitor: Visitor): string {
    return visitor.visit(this);
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }
}
