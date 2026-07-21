import {
        BrowserRouter,
        Routes,
        Route,
        Navigate,
} from 'react-router-dom';
import {OrdersPage} from "@/pages/OrdersPage";
import {ProtectedRoute} from "@/app/router/ProtectedRoute.tsx";


export const Router = ()=> (
    <BrowserRouter>
            <Routes>
                    <Route
                        path="/orders"
                        element={
                                <ProtectedRoute >
                                        <OrdersPage />
                                </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/products"
                        element={
                                <ProtectedRoute>
                                        <ProductsPage />
                                </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/"
                        element={<Navigate to="/orders" replace />}
                    />
                    <Route
                        path="*"
                        element={<NotFoundPage />}
                    />
            </Routes>
        </BrowserRouter>
);