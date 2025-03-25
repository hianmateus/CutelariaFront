/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
    Main, General, ImageProduct, SpanProduct,
    ProductName, DescProduct,
    PriceProduct, Price,
    Pricepix, DivButtons,
    ButtonShop, ButtonLink,
    TextPix, DivImage,
    ButtonClose, OfferBanner, Offertitle, Stock, StockOff
} from './styles'
import { useCart } from "../../hooks/CartContext";
import { formatPrice } from "../../utils/formartPrice";

import { MdOutlineAddShoppingCart } from "react-icons/md";
import MercadoIcon from '../../assets/imgs/Icons/Mlicon.png'


// eslint-disable-next-line react/prop-types
export function MenuSelect({ selectMenu, setSelectMenu, selectedProduct }) {
    const { putProductInCart } = useCart()

    const [product, setProduct] = useState({})

    useEffect(() => {
        if (selectedProduct) {
            setProduct(selectedProduct);
        }
    }, [selectedProduct])


    return (
        <Main style={{
            visibility: selectMenu ? 'visible' : 'hidden',
            zIndex: selectMenu ? '6' : '5',
            opacity: selectMenu ? '1' : '0'
        }}>

            <General>
                <OfferBanner style={{ display: product.offer ? 'flex' : 'none' }}>
                    <Offertitle>EM OFERTA</Offertitle>
                </OfferBanner>

                <ButtonClose onClick={() => setSelectMenu(false)}>X</ButtonClose>

                <DivImage>
                    <StockOff style={{ display: product.stock < 1 ? "flex" : "none" }}>
                        <p>ESGOTADO</p>
                    </StockOff>

                    <ImageProduct src={product.url} alt={product.name} />

                    <Stock>Disponiveis: {product.stock}</Stock>

                </DivImage>

                <SpanProduct>
                    <ProductName>{product.name}</ProductName>

                    <DescProduct>
                        <p>{product.desc}</p>

                        <p>{product.info1}</p>

                    </DescProduct>

                    <PriceProduct>
                        <Price style={{ color: product.offer ? '#00e600' : '#fdc800' }}>{product.currencyValue}</Price>
                        <Pricepix>{formatPrice(product.price * 0.9)} via PIX</Pricepix>

                        <TextPix>Outras formas de pagamentos podem ser feitas na finalização da Compra</TextPix>

                        <DivButtons>
                            <ButtonShop onClick={() => { putProductInCart(product); setSelectMenu(false) }}><MdOutlineAddShoppingCart className="IconShop" /> Adicionar ao Carrinho</ButtonShop>

                            <ButtonLink> <img className="IconShop" src={MercadoIcon} alt="icon-mercado-livre-png" /> Confira no Mercado</ButtonLink>
                        </DivButtons>
                    </PriceProduct>
                </SpanProduct>
            </General>

        </Main>


    )
}