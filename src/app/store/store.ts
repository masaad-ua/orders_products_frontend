import {configureStore} from "@reduxjs/toolkit";
import {authApi} from "@/features/auth/api/authApi.ts";
import {authReducer} from "@/features/auth/model/authSlice.ts";
import {ordersApi} from "@/features/orders/api/ordersApi.ts";
import {productsApi} from "@/features/products/api/productsApi.ts";

export const store = configureStore({
    reducer: {
        auth: authReducer,

        [authApi.reducerPath]: authApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            ordersApi.middleware,
            productsApi.middleware),
    devTools: import.meta.env.DEV
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;