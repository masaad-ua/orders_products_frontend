export interface OrderI{
    id: number;
    title: string;
    date: string;
    description: string;
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