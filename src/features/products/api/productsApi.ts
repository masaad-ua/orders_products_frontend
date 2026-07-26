import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {tokenStorage} from "@/shared/lib/tokenStorage/tokenStorage.ts";
import type {ProductI} from "@/features/products/model/types/product.i.ts";

export const productsApi = createApi({
    reducerPath: "productsApi",
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
    tagTypes: ["Products"],
    endpoints:(builder)=>({
        getProducts: builder.query<ProductI[], void>({
            query: () => '/products',
            providesTags: ['Products'],
        }),

        getProductById: builder.query<ProductI, number>({
            query: (id) => `/products/${id}`,
        }),

    })
})

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
} = productsApi;