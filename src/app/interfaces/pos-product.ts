import { CategoryList } from "./category-list";
import { PosPointList } from "./pos-point-list";
import { Tax } from "./tax";
import { RevenueAccountLabel } from "./revenue-account-label";
import { RevenueAccountCategory } from "./revenue-account-category";
import { PosCategory } from "./pos-category";

export interface PosProduct {
    id:number;
    name:string;
    title:string;
    price:string;
    status:boolean;
    description:string;
    category:PosCategory[];
    posPoint:PosPointList[];
    taxes:Tax[];
    revenueLabel:RevenueAccountLabel[];
    revenueCategory:RevenueAccountCategory[];
}
