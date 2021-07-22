import { Visitor } from "./visitor";

export interface Visitable {
  accept(visitor: Visitor): string;

  getName(): string;

  getPrice(): number;
}
