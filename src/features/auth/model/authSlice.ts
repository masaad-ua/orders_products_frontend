import {createSlice} from "@reduxjs/toolkit";
import  type {PayloadAction} from "@reduxjs/toolkit";
import {tokenStorage} from "@/shared/lib/tokenStorage/tokenStorage.ts";

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
}

const token = tokenStorage.get();

const initialState: AuthState = {
    token,
    isAuthenticated: !!token,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<string>){
            state.token = action.payload;
            state.isAuthenticated  = true;
            tokenStorage.set(action.payload);
        },

        logout(state){
            state.token = null;
            state.isAuthenticated = false;
            tokenStorage.remove();
        },
    },
});


export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;