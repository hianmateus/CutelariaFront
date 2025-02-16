import { Container, Banner, ContainerCenter, Link, ContainerRight, Profile, Pedidos, Count, Sair, Span, UserName, CPedidos } from "./styles"
import LogoImage from '../../assets/imgs/ModeloLogo3.png'
import UserIcon from '../../assets/imgs/Icons/userIcon.png'
import OrderICon from '../../assets/imgs/Icons/OrdersIcon.png'

import { useCart } from '../../hooks/CartContext'

import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from "react-router-dom";
import { useUser } from '../../hooks/UserContext'

export function Header() {
    const { cartProducts } = useCart()

    const {logout, userInfo} = useUser()
    function logoutUser() {
        logout()
        navigate('/login')
    }

    useEffect(() => {
        AOS.init({
        });
    }, [])

    const navigate = useNavigate()
    const BackHome = () => {
        navigate('/');
    }

    const ProductQuantity = cartProducts.reduce((acc, current) => {
        return current.quantity + acc
    }, 0)


    return (
        <Container data-aos="fade-down">
            <Banner src={LogoImage} data-aos="flip-down" data-aos-delay="300" onClick={BackHome}/>

            <ContainerCenter>
                <div data-aos="fade-right" data-aos-delay="400">
                    <Link to='/laminas'>LÂMINAS</Link>
                </div>
                <div data-aos="fade-right" data-aos-delay="500">
                    <Link to='/tesouras'>TESOURAS</Link>
                </div>
                <div data-aos="fade-right" data-aos-delay="600">
                    <Link to='/maquinas'>MÁQUINAS</Link>
                </div>
                <div data-aos="fade-right" data-aos-delay="700">
                    <Link to='/equipamentos'>EQUIPAMENTOS</Link>
                </div>
                <div data-aos="fade-right" data-aos-delay="800">
                    <Link to='/pentes'>PENTES</Link>
                </div>
            </ContainerCenter>

            <ContainerRight>
                <Profile data-aos="flip-left" data-aos-delay="950">
                    <img src={UserIcon} alt="icon-user-png" />
                    <div>
                        <Span>
                            <span>Olá, </span> <UserName>{userInfo.name}</UserName>
                        </Span>

                        <Sair onClick={logoutUser}>Sair</Sair>
                    </div>
                </Profile>

                <Pedidos data-aos="flip-left" data-aos-delay="1100">
                    <div>
                        <CPedidos>{ProductQuantity}</CPedidos>
                        <img src={OrderICon} alt="icon-Orders-png"/>
                    </div>

                    <Count to='/carrinho'>Carrinho</Count>
                </Pedidos>

            </ContainerRight>
        </Container>
    )
}