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

export function CartResume({ visivelButton, address, deliveryTax }) {
    useEffect(() => {
        initMercadoPago('APP_USR-3c5a09a1-faf8-483b-be85-bbd552a550ea', { locale: 'pt-BR' });
    }, []);

    const { cartProducts, finalPrice, totalValues } = useCart();
    const [preferenceId, setPreferenceId] = useState(null);
    const navigate = useNavigate();

    const totalPrice = finalPrice + (deliveryTax || 0);

    const submitOrder = async (paymentMethod = "normal") => {
        if (!address.cep || !address.street || !address.neighborhood ||
            !address.city || !address.state || !address.complemento) {
            toast.error('Preencha todos os campos do Endereço!');
            return;
        }

        if (cartProducts.length === 0) {
            toast.error('O carrinho está vazio!');
            return;
        }

        const products = cartProducts.map((product) => ({
            title: product.name,
            quantity: product.quantity,
            price: product.price
        }));

        try {
            const { data } = await api.post('/create_preference', {
                items: products,
                paymentMethod,
                deliveryTax
            });

            if (data.id) {
                setPreferenceId(data.id);
            }
        } catch (error) {
            console.error("Erro no processo de pagamento:", error);
            toast.error('Erro ao processar pagamento!');
        }
    };

    const NextPage = async () => {
        if (cartProducts.length === 0) {
            toast.error('O carrinho está vazio!');
            return;
        } else {

            console.log(totalValues);
            navigate('/order');
        }
    }


    return (
        <ContentResume>
            <Container>
                <div className='container-top'>
                    <h2 className="title">Resumo do Pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatPrice(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de Entrega</p>
                    <p className="delivery-tax-price">{formatPrice(deliveryTax || 0)}</p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatPrice(totalPrice)}</p>
                </div>
                <BackCart to='/carrinho' style={{ display: visivelButton ? 'none' : 'flex' }}>Rever meu Pedido</BackCart>
            </Container>
            <div>
                <GotoOrder onClick={NextPage} style={{ display: visivelButton ? 'flex' : 'none' }}>Continuar</GotoOrder>
                <Button onClick={() => submitOrder("normal")} style={{ display: visivelButton ? 'none' : 'flex' }}>Finalizar Pedido</Button>
                <PixOption onClick={() => submitOrder("pix")} style={{ display: visivelButton ? 'none' : 'flex' }}> <FaPix className='PixIxon' /> Pagar com Pix</PixOption>

                {preferenceId && <Wallet initialization={{ preferenceId }} />}
            </div>
        </ContentResume>
    );
}
