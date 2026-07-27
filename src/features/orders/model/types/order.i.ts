import type {ProductI} from "@/features/products/model/types/product.i.ts";

export interface OrderI{
    id: number;
    title: string;
    date: string;
    description: string;
    products: ProductI[],
    productsCount: number,
    totalUAH: number,
    totalUSD: number,
}

export interface OrdersResponse {
    data: OrderI[];
    amountOrders: number;
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasNextPage: boolean;
    };
}