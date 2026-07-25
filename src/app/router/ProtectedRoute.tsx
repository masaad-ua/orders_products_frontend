import { Navigate } from 'react-router-dom';
import {useSelector} from "react-redux";
import type {RootState} from "@/app/store/store.ts";

interface Props {
    children: React.ReactNode;
}

export function ProtectedRoute({children}: Props) {
    const {isAuthenticated, isLoading} = useSelector(
        (state: RootState) => state.auth,
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <>{children}</>;
}