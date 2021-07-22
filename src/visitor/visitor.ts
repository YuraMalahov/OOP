import { Liquor } from "./liquor";
import { Necessity } from "./nesessity";
import { Tobacco } from "./tobacco";

export interface Visitor {
  visit(item: Liquor | Tobacco | Necessity): string;
}
