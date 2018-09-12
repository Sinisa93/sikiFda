import { Tax } from "./tax";
import { RevenueAccountLabel } from "./revenue-account-label";
import { RevenueAccountCategory } from "./revenue-account-category";

export interface AddOn {
    id:number;
    title:string;
    price:string;
    type:string;
    status:boolean;
    description:string;
    taxes:Tax[];
    revenueLabel:RevenueAccountLabel[];
    revenueCategory:RevenueAccountCategory[];
}
