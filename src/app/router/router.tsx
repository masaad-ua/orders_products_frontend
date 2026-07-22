import {
        BrowserRouter,
        Routes,
        Route,
        Navigate,
} from 'react-router-dom';
import {OrdersPage} from "@/pages/OrdersPage";
import {ProtectedRoute} from "@/app/router/ProtectedRoute.tsx";
import {MainLayout} from "@/widgets/Layouts/ui/MainLayout.tsx";
import ProductsPage from "@/pages/ProductsPage/ui/ProductsPage.tsx";
import {Unauthorized} from "@/pages/Unauthorized";


export const Router = ()=> (
    <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <ProtectedRoute>
                            <MainLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="/orders" element={<OrdersPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/unauthorized" element={<Unauthorized />} />
                    <Route path="/" element={<Navigate to="/orders" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
);