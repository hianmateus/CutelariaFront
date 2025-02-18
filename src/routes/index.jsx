import { Route, Routes } from "react-router-dom";

import { Cart, Register, Login, Home, Laminas, Tesouras, Maquinas, Equipamentos, Pentes, Order, EditProduct, NewProduct, Orders, Products  } from "../Pages";
import { UserLayout } from "../layout/UserLayout";
import { AdminLayout } from "../layout/AdminLayout";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/laminas" element={<Laminas />} />
                <Route path="/tesouras" element={<Tesouras />} />
                <Route path="/maquinas" element={<Maquinas />} />
                <Route path="/equipamentos" element={<Equipamentos />} />
                <Route path="/pentes" element={<Pentes />} />

            </Route>

            <Route path="/admin" element={<AdminLayout/>}>
                <Route path="/admin/pedidos" element={<Orders />} />
                <Route path="/admin/novo-produto" element={<NewProduct />} />
                <Route path="/admin/editar-produto" element={<EditProduct />} />
                <Route path="/admin/produtos" element={<Products />} />

            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/order" element={<Order />} />

        </Routes>
    )
}
