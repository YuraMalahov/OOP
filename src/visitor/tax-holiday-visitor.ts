import { Liquor } from "./liquor";
import { Necessity } from "./nesessity";
import { Tobacco } from "./tobacco";
import { Visitable } from "./visitable";
import { Visitor } from "./visitor";


export class TaxHolidayVisitor implements Visitor {

  public visit(item: Visitable): string {
    if (item instanceof Liquor) {
      return `${item.getName()} ${item.getPrice() * 0.04}`;
    }

    if (item instanceof Tobacco) {
      return `${item.getName()} ${item.getPrice() * 0.05}`;
    }

    if (item instanceof Necessity) {
      return `${item.getName()} ${item.getPrice() * 0.01}`;
    }

    return '';
  }
}
