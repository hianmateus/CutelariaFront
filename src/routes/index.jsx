import { createBrowserRouter } from "react-router-dom";

import { Cart, Register, Login, Home, Laminas, Tesouras, Maquinas, Equipamentos, Pentes, Order } from "../Pages";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },
    {
        path: '/laminas',
        element: <Laminas />,
    },
    {
        path: '/tesouras',
        element: <Tesouras />,
    },
    {
        path: '/maquinas',
        element: <Maquinas />,
    },
    {
        path: '/equipamentos',
        element: <Equipamentos />,
    },
    {
        path: '/pentes',
        element: <Pentes />,
    },
    {
        path: '/carrinho',
        element: <Cart />,
    },
    {
        path: '/order',
        element: <Order />,
    },

])