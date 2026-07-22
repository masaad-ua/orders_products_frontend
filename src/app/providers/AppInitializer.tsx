import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useLoginMutation } from '@/features/auth/api/authApi';
import { login } from '@/features/auth/model/authSlice';
import { tokenStorage } from '@/shared/lib/tokenStorage/tokenStorage';

export function AppInitializer() {
    const dispatch = useDispatch();
    const [loginRequest] = useLoginMutation();

    useEffect(() => {
        async function autoLogin() {
            const token = tokenStorage.get();

            if (token) {
                return;
            }

            try {
                const response = await loginRequest({
                    login: 'admin',
                    password: 'admin123',
                }).unwrap();

                dispatch(login(response.accessToken));
            } catch (error) {
                console.error(error);
            }
        }

        autoLogin();
    }, [dispatch, loginRequest]);

    return null;
}