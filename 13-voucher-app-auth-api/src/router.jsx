import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import SalePage from "./pages/SalePage";
import ProductCreatePage from "./pages/ProductCreatePage";
import ProductEditPage from "./pages/ProductEditPage";
import VoucherPage from "./pages/VoucherPage";
import VoucherDetailPage from "./pages/VoucherDetailPage";
import LoginFormPage from "./pages/LoginFormPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import UserProfilePage from "./pages/userProfilePage";
import UserProfileChangeNamePage from "./pages/userProfileChangeNamePage";
import UserProfileChangePassPage from "./pages/userProfileChangePassPage";
import UserProfileChangeImgPage from "./pages/userProfileChangeImgPage";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <LoginFormPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "dashboard",
                element: <Layout />,
                children: [
                    {
                        index: true,
                        element: <DashboardPage />,
                    },
                    {
                        path: "product",
                        element: <ProductPage />,
                    },
                    {
                        path: "product/create",
                        element: <ProductCreatePage />,
                    },
                    {
                        path: "product/edit/:id",
                        element: <ProductEditPage />,
                    },
                    {
                        path: "sale",
                        element: <SalePage />,
                    },
                    {
                        path: "voucher",
                        element: <VoucherPage />,
                    },
                    {
                        path: "voucher/detail/:id",
                        element: <VoucherDetailPage />,
                    },
                    {
                        path: "user-profile",
                        children: [
                            {
                                index: true,
                                element: <UserProfilePage />,
                            },
                            {
                                path: "user-change-name",
                                element: <UserProfileChangeNamePage />,
                            },
                            {
                                path: "user-change-password",
                                element: <UserProfileChangePassPage />,
                            },
                            {
                                path: "user-change-img",
                                element: <UserProfileChangeImgPage />,
                            }
                        ],
                    }
                ],
            },
        ],
    },
]);

export default router;