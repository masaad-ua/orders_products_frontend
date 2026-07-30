import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {RootState} from "@/app/store/store.ts";
import { API_URL } from "@/shared/config/env";

export interface LoginRequest {
    login: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as RootState).auth.token;

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const {
    useLoginMutation,
} = authApi;