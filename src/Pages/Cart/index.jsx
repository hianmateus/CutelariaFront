
import { Banner, Content, General, Title } from "./styles"
import { Credits, CartItems, CartResume } from "../../components";
import LogoImage from '../../assets/imgs/ModeloLogo3.png'
import { useState } from "react";

export function Cart() {
    const [visivelButton, setVisivelButton] = useState(true)

    return (
        <General>
            <Banner to='/'>
                <img src={LogoImage} alt="Logo-image-png"></img>
            </Banner>

            <Title>Chekout - Pedidos</Title>

            <Content>
                <CartItems />
                <CartResume visivelButton={visivelButton} setVisivelButton={setVisivelButton} />
            </Content>
            <Credits />
        </General>
    )
}