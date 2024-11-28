import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";
import MainLayout from "../components/MainLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement : <ErrorPage />,
        children: [

            {
                path: "/",
                element: <Home />
            },
            {
                path: "about-us",
                element: <AboutUs />
            },
            {
                path: "mycart",
                element: <MyCart />
            },
            {
                path: "product-detail/:productSlug",
                element: <ProductDetail />
            }

        ]
    }
])

export default router;