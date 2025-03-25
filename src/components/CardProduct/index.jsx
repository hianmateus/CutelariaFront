import PropTypes from "prop-types"
import { useCart } from "../../hooks/CartContext";

import { MdOutlineShoppingBag } from "react-icons/md";
import { CardImage, Container, DivSpan, PdButton, Pdinfo, PdName, PdPrice, OfferBanner, Offertitle, StockOff } from "./styles"
import { formatPrice } from "../../utils/formartPrice";

// eslint-disable-next-line react/prop-types
export function CardProduct({ product, setSelectMenu, setSelectedProduct }) {

    const { putProductInCart } = useCart()

    return (
        <Container onClick={() => { setSelectMenu(true); setSelectedProduct(product) }}>
            <OfferBanner style={{ display: product.offer ? 'flex' : 'none' }}>
                <Offertitle>EM OFERTA</Offertitle>
            </OfferBanner>

            <StockOff style={{ display: product.stock < 1 ? "flex" : "none" }}>
                <p>ESGOTADO</p>
            </StockOff>

            <CardImage src={product.url} alt={product.name} />

            <DivSpan>
                <PdName>{product.name}</PdName>
                <PdPrice style={{ color: product.offer ? '#00e600' : '#fdc800' }}>{product.currencyValue}</PdPrice>
                <Pdinfo>{formatPrice(product.price * 0.9)} via PIX</Pdinfo>

                <PdButton onClick={(event) => { event.stopPropagation(); putProductInCart(product) }}> <MdOutlineShoppingBag className="IconShop" /> EU QUERO!</PdButton>
            </DivSpan>
        </Container>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object
}