import CreateProductPage from "../../pages/CreateProductPage/CreateProductPage"
import MainPage from "../../pages/MainPage/MainPage"
import NotFounfPage from "../../pages/NotFounfPage/NotFounfPage"
import ProductsPage from "../../pages/ProductsPage/ProductsPage"

export const AppRoutes = {
    MAIN: 'main',
    PRODUCTS: 'products',
    AUTH: 'auth',
    CREATE_PRODUCT: 'create-product',
    NOT_FOUND: 'notFound'
}

export const routeConfig = {
    [AppRoutes.MAIN]: {
        path: '/',
        element: <MainPage />
    },
    [AppRoutes.PRODUCTS]: {
        path: '/products',
        element: <ProductsPage />
    },
    [AppRoutes.CREATE_PRODUCT]: {
        path: '/create-product',
        element: <CreateProductPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: '/*',
        element: <NotFounfPage />
    }
}