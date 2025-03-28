import {
    Container, Banner, ContainerCenter,
    Link, ContainerRight, Profile, Pedidos,
    Count, Sair, Span, UserName, CPedidos,
    MobileContainer, MobileContainer2
} from "./styles"
import LogoImage from '../../assets/imgs/ModeloLogo3.png'
import UserIcon from '../../assets/imgs/Icons/userIcon.png'
import OrderICon from '../../assets/imgs/Icons/OrdersIcon.png'

import { useCart } from '../../hooks/CartContext'

import { useEffect, useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from "react-router-dom";
import { useUser } from '../../hooks/UserContext'

import { List } from '@phosphor-icons/react'

export function Header() {
    const { cartProducts } = useCart()
    const [visibleMenu, setVisibleMenu] = useState(false)

    function ShowMobile() {
        if (visibleMenu === false) {
            setVisibleMenu(true)
        } else {
            setVisibleMenu(false)
        }
    }

    function HiddeMobile() {
        if (visibleMenu === true) {
            setVisibleMenu(false)
        }
    }

    const { logout, userInfo } = useUser()
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
        if (userInfo.admin) {
            navigate('/admin/produtos');
        } else {
            navigate('/');
        }
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const ProductQuantity = cartProducts.reduce((acc, current) => {
        return current.quantity + acc
    }, 0)

    return (
        <Container data-aos="fade-down">
            <Banner src={LogoImage} data-aos="flip-down" data-aos-delay="300"
                onClick={
                    BackHome
                } />

            <div className="ButtonMenu" onClick={ShowMobile}><List /></div>

            <MobileContainer>

                <ContainerCenter>
                    <div data-aos="fade-right" data-aos-delay="800">
                        <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>HOME</Link>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="400">
                        <Link to='/laminas' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>LÂMINAS</Link>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="500">
                        <Link to='/tesouras' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>TESOURAS</Link>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="600">
                        <Link to='/maquinas' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>MÁQUINAS</Link>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="700">
                        <Link to='/equipamentos' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>EQUIPAMENTOS</Link>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="800">
                        <Link to='/pentes' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>PENTES</Link>
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
                            <img src={OrderICon} alt="icon-Orders-png" />
                        </div>

                        <Count to='/carrinho' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Carrinho</Count>
                    </Pedidos>

                </ContainerRight>

            </MobileContainer>

            <MobileContainer2 style={{ display: visibleMenu ? "flex" : "none", }}>

                <ContainerCenter>
                    <div data-aos="fade-right" data-aos-delay="800">
                        <Link to='/' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); HiddeMobile() }}>HOME</Link>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="400">
                        <Link to='/laminas' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); HiddeMobile() }}>LÂMINAS</Link>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="500">
                        <Link to='/tesouras' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); HiddeMobile() }}>TESOURAS</Link>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="600">
                        <Link to='/maquinas' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); HiddeMobile() }}>MÁQUINAS</Link>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="700">
                        <Link to='/equipamentos' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); HiddeMobile() }}>EQUIPAMENTOS</Link>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="800">
                        <Link to='/pentes' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); HiddeMobile() }}>PENTES</Link>
                    </div>
                </ContainerCenter>

                <ContainerRight>
                    <Profile data-aos="flip-left" data-aos-delay="950">
                        <img src={UserIcon} alt="icon-user-png" />
                        <div>
                            <Span>
                                <span>Olá, </span> <UserName>{userInfo.name}</UserName>
                            </Span>

                            <Sair onClick={logoutUser}></Sair>
                        </div>
                    </Profile>

                    <Pedidos data-aos="flip-left" data-aos-delay="1100">
                        <div>
                            <CPedidos>{ProductQuantity}</CPedidos>
                            <img src={OrderICon} alt="icon-Orders-png" />
                        </div>

                        <Count to='/carrinho' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Carrinho</Count>
                    </Pedidos>

                </ContainerRight>

            </MobileContainer2>

        </Container>
    )
}