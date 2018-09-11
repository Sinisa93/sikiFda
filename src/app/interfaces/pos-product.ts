import { CategoryList } from "./category-list";
import { PosPointList } from "./pos-point-list";

export interface PosProduct {
    id:number;
    name:string;
    title:string;
    price:string;
    status:boolean;
    description:string;
    category:CategoryList[],
    posPoint:PosPointList[]
}
