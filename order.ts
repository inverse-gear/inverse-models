import {InvCompanyBase, uuid} from '.'

export interface InvOrder extends InvCompanyBase {
    IntentId: string;
    DiscountCodeId?: string;
    FirstName: string;
    LastName: string;
    Email: string;
    TotalCost: number;
    Discount: number;
    Tax: number;
    TotalCostWithTax: number;
    Notes?: string;

    Items: InvOrderItem[]
}

export interface InvOrderItem {
    Id: uuid;
    OrderId: string;
    ProductId: string;
    SizeId: string;
    Quantity: number;
    CreatedAt: Date;

    Order: InvOrder;
    Product: InvProduct;
    Size: InvProductSize;
}