import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {tokenStorage} from "@/shared/lib/tokenStorage/tokenStorage.ts";
import type {OrderI} from "@/features/orders/model/types/order.i.ts";

export const ordersApi = createApi({
    reducerPath: "ordersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api",
        prepareHeaders: (headers) => {
            const token = tokenStorage.get();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        }
    }),
    tagTypes: ["Orders"],
    endpoints:(builder)=>({
        getOrders: builder.query<OrderI[], void>({
            query: () => '/orders',
            providesTags: ['Orders'],
        }),

        getOrderById: builder.query<OrderI, number>({
            query: (id) => `/orders/${id}`,
        }),

        deleteOrder: builder.mutation<void, number>({
            query: (id) => ({
                url: `/orders/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Orders'],
        }),
    })
})

export const {
    useGetOrdersQuery,
    useGetOrderByIdQuery,
    useDeleteOrderMutation,
} = ordersApi;