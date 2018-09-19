import { RevenueAccountLabel } from "./revenue-account-label";
import { RevenueAccountCategory } from "./revenue-account-category";

export interface RevenueAccountingManager {
    id:number;
    name:string;
    revenueLabels:RevenueAccountLabel[],
    revenueCategories:RevenueAccountCategory[];
    type:string;
}
