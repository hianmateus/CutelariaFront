/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formartPrice';
import { toast } from 'react-toastify';
import { Button } from "../Button";
import { ContentResume, Container, GotoOrder, BackCart, PixOption } from './styles';
import { useNavigate } from 'react-router-dom';

import { FaPix } from "react-icons/fa6";

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

export function CartResume({ visivelButton }) {
    useEffect(() => {
        initMercadoPago('APP_USR-3c5a09a1-faf8-483b-be85-bbd552a550ea', { locale: 'pt-BR' });
    }, []);

    const { cartProducts, finalPrice, address } = useCart();
    const [deliveryTax] = useState(5);
    const [updatedFinalPrice, setUpdatedFinalPrice] = useState(finalPrice);
    const [preferenceId, setPreferenceId] = useState(null); // Estado para armazenar preferenceId
    const navigate = useNavigate();

    useEffect(() => {
        const total = cartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);
        setUpdatedFinalPrice(total);
    }, [cartProducts]);

    const submitOrder = async (paymentMethod = "normal") => { // Adiciona o método de pagamento como parâmetro
        if (!address.cep || !address.street || !address.neighborhood ||
            !address.city || !address.state || !address.complemento) {
            toast.error('Preencha todos os campos do Endereço!');
            return;
        }

        if (cartProducts.length === 0) {
            toast.error('O carrinho está Vazio!');
            return;
        }

        const products = cartProducts.map((product) => ({
            title: product.name,
            quantity: product.quantity,
            price: product.price
        }));

        products.push({
            title: "Taxa de Entrega",
            quantity: 1,
            price: deliveryTax
        });
        

        try {
            // Envia o método de pagamento junto com os itens
            const { data } = await api.post('/create_preference', { items: products, paymentMethod });

            if (data.id) {
                setPreferenceId(data.id); // Atualiza o estado com o preferenceId
            }
            
        } catch (error) {
            console.error("Erro no processo de pagamento:", error);
            toast.error('Erro ao processar pagamento!');
        }
    };

    return (
        <ContentResume>
            <Container>
                <div className='container-top'>
                    <h2 className="title">Resumo do Pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatPrice(updatedFinalPrice)}</p>
                    <p className="delivery-tax">Taxa de Entrega</p>
                    <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatPrice(updatedFinalPrice + deliveryTax)}</p>
                </div>
                <BackCart to='/carrinho' style={{ display: visivelButton ? 'none' : 'flex' }}>Rever meu Pedido</BackCart>
            </Container>
            <GotoOrder onClick={() => navigate('/order')} style={{ display: visivelButton ? 'flex' : 'none' }}>Continuar</GotoOrder>
            <Button onClick={() => submitOrder("normal")} style={{ display: visivelButton ? 'none' : 'flex' }}>Finalizar Pedido</Button>
            <PixOption onClick={() => submitOrder("pix")} style={{ display: visivelButton ? 'none' : 'flex' }}> <FaPix className='PixIxon' /> Pagar com Pix</PixOption>

            {/* Renderiza o Wallet somente se houver um preferenceId válido */}
            {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </ContentResume>
    );
}
