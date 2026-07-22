import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useLoginMutation } from '@/features/auth/api/authApi';
import {finishLoading, login, startLoading} from '@/features/auth/model/authSlice';
import { tokenStorage } from '@/shared/lib/tokenStorage/tokenStorage';

export function AppInitializer() {
    const dispatch = useDispatch();
    const [loginRequest] = useLoginMutation();

    useEffect(() => {
        async function autoLogin() {
            dispatch(startLoading());

            try {
                const token = tokenStorage.get();
                if (token) {
                    return;
                }
                const response = await loginRequest({
                    login: 'admin',
                    password: 'admin123',
                }).unwrap();

                dispatch(login(response.accessToken));
            } catch (error) {
                console.error(error);
            } finally {
                dispatch(finishLoading());
            }
        }

        autoLogin();
    }, [dispatch, loginRequest]);

    return null;
}