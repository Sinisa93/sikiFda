import { TaxAmount } from "./tax-amount";

export interface Tax {
    id : number;
    title: string;
    status: boolean;
    tax: TaxAmount[];
    isPerReservation:boolean;
    isInclusiveTax:boolean;
}
