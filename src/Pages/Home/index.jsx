import {
    General, Section1, Section2, Section3, ContainerSec2, Span, DivCTLeft,
    DivCTRight, DivTitle, TitleSec3, Divpart1, Divpart2, CardsSec3, Card, Link, PgfSec3, CardBackgrund,
    DivSpan, DivMap
} from "./styles";
import { CategoryCarousel, Menu } from "../../components";

import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { IoLogoInstagram } from "react-icons/io";
import { FaMapMarker } from "react-icons/fa";

import CardBackground from '../../assets/imgs/Section1/CardBackground.png'
import CardBackground1 from '../../assets/imgs/Section1/CardBackground1.png'
import CardBackground2 from '../../assets/imgs/Section1/CardBackground2.png'

import { useEffect, useState, useRef } from "react"
import { useCart } from "../../hooks/CartContext"; // Hook do carrinho
import { useNavigate, useSearchParams } from "react-router-dom"; // Para capturar parâmetros da URL
import { toast } from "react-toastify"; // Para exibir o toast
import { api } from '../../services/api';

import AOS from 'aos'
import 'aos/dist/aos.css'

export function Home() {
    const [isBGVisible, setIsBGVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState();
    const { clearCart, address, cartProducts } = useCart(); // Função para limpar o carrinho
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const requestSent = useRef(false); // ✅ Referência para evitar múltiplas execuções

    useEffect(() => {
        const status = searchParams.get("status");

        if (status === "success" && !requestSent.current && cartProducts.length > 0) {
            requestSent.current = true; // ✅ Marca como enviado

            console.log("🏠 Endereço recebido no Home:", address);
            console.log("🛒 Produtos no carrinho antes do envio:", cartProducts);

            const products = cartProducts.map((product) => ({
                id: product.id,
                quantity: product.quantity
            }));

            api.post('/orders', { products, address }, { validateStatus: () => true })
                .then(({ status }) => {
                    if (status === 200 || status === 201) {
                        toast.success("🎉 Pedido Realizado com Sucesso!");
                        setTimeout(() => navigate("/", { replace: true }), 2000);
                        clearCart();
                    } else if (status === 409) {
                        toast.error("⚠️ Falha ao Realizar seu Pedido");
                    } else {
                        throw new Error();
                    }
                })
                .catch(() => {
                    toast.error("⚠️ Falha no Sistema! Tente novamente.");
                });

            console.log("📦 Produtos enviados no pedido:", products);
        }
    }, [searchParams, clearCart, navigate, cartProducts, address]);



    useEffect(() => {
        AOS.init({
        });
    }, [])

    return (
        <General>

            <Menu isBGVisible={isBGVisible}
                setIsBGVisible={setIsBGVisible}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            <Section1>
                <div>
                    <h1 data-aos="flip-left" data-aos-duration="800">OS MELHORES EQUIPAMENTOS ESTÃO AQUI!</h1>
                    <p data-aos="fade-down" data-aos-delay="300">Eleve o Nível do Seu Trabalho Profissional</p>
                </div>
            </Section1>

            <Section2>

                <CategoryCarousel setIsBGVisible={setIsBGVisible} setActiveCategory={setActiveCategory}
                />

                <ContainerSec2>
                    <Span>
                        <DivCTLeft>
                            <h2 data-aos="flip-down" data-aos-delay="200" data-aos-duration="800">Horário de Funcionamento</h2>

                            <div data-aos="fade-down" data-aos-delay="300">
                                <p><b>Segunda</b> 8:00 - 17:00</p>
                            </div>
                            <div data-aos="fade-down" data-aos-delay="400">
                                <p><b>Terça</b> 8:00 - 17:00</p>
                            </div>
                            <div data-aos="fade-down" data-aos-delay="500">
                                <p><b>Quarta</b> 8:00 - 17:00</p>
                            </div>
                            <div data-aos="fade-down" data-aos-delay="600">
                                <p><b>Quinta</b> 8:00 - 17:00</p>
                            </div>
                            <div data-aos="fade-down" data-aos-delay="700">
                                <p><b>Sexta</b> 8:00 - 17:00</p>
                            </div>
                        </DivCTLeft>

                        <DivCTRight>
                            <h2 data-aos="flip-down" data-aos-delay="300">SOBRE <b>NÓS</b></h2>

                            <p data-aos="fade-down" data-aos-delay="300" data-aos-duration="800">Na Cutelaria Pets, oferecemos mais de que produtos e serviços:
                                compratilhamos nosso conhecimento para garantir que você faça a escolha certa.
                                Somos especialistas no segmento pet, unindo serviços de afiação e assistência
                                técnica especializada com a venda de equipamentos e acessórios de alta performance para banho e tosa.</p>

                            <div data-aos="flip-down" data-aos-delay="300">
                                <FaWhatsapp className="whatsapp-icon" /> <a href="https://wa.me/558396166367" target="black">Entre em Contato</a>
                            </div>
                        </DivCTRight>
                    </Span>
                </ContainerSec2>

            </Section2>

            <Section3>
                <DivTitle>
                    <TitleSec3 data-aos="zoom-in" data-aos-duration="800">COMO PODEMOS <b>LHE AJUDAR?</b></TitleSec3>
                </DivTitle>

                <Divpart1>
                    <CardsSec3>
                        <Card style={{
                            background: `url('${CardBackground}')`,
                            backgroundSize: "cover"
                        }} data-aos="flip-left" data-aos-delay="200" data-aos-duration="800">
                            <div>
                                <h3>VENDA DE PRODUTOS</h3>

                                <p>Tudo o que você precisa para o cuidado pet em um só lugar</p>
                            </div>

                            <CardBackgrund>
                                <MdOutlineAddShoppingCart className="IconCard" onClick={() => {
                                    setIsBGVisible(true)
                                    setActiveCategory(0)
                                }} />
                            </CardBackgrund>
                        </Card>
                        <Card style={{
                            background: `url('${CardBackground1}')`,
                            backgroundSize: "cover"
                        }} data-aos="flip-left" data-aos-delay="400" data-aos-duration="800">
                            <div>
                                <h3>ASSISTÊNCIA TECNICA</h3>

                                <p>Manutenção que prolonga a vida útil dos seus Equipamentos</p>
                            </div>

                            <CardBackgrund>
                                <a className="LinkWhats" href="https://wa.me/558396166367" target="black"><GiAutoRepair className="IconCard" /></a>
                            </CardBackgrund>

                            <p className="TextWhats">Entre em Contato</p>

                        </Card>
                        <Card style={{
                            background: `url('${CardBackground2}')`,
                            backgroundSize: "cover"
                        }} data-aos="flip-left" data-aos-delay="600" data-aos-duration="800">
                            <div>
                                <h3>SOBRE OS EQUIPAMENTOS</h3>

                                <p>Sobre a Qualidade e precisão de cada ferramenta</p>
                            </div>

                            <CardBackgrund>
                                <ul>
                                    <Link to='/laminas' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>• Laminas e Acessórios</Link>
                                    <Link to='/tesouras' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>• Tesouras e Acessórios</Link>
                                    <Link to='/maquinas' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>• Maquinas de Tosa</Link>
                                    <Link to='/equipamentos' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>• Secadoras e Equipamentos</Link>
                                    <Link to='/pentes' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>• Pentes e Rasqueadeiras</Link>

                                </ul>
                            </CardBackgrund>
                        </Card>

                    </CardsSec3>

                    <PgfSec3 data-aos="zoom-in" data-aos-duration="800">Nosso Compromisso é proporcionar a Melhor experiência de compra,
                        ajudando Groomers, Veterinários, e Donos de pets a fazerem escolhas certas
                        a alcançarem resultados excepcionais com confiança e excelência</PgfSec3>
                </Divpart1>

                <Divpart2>
                    <h1 data-aos="fade-right" data-aos-duration="800">CONECTE-SE CONOSCO</h1>

                    <DivSpan>
                        <span>
                            <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
                                <IoLogoInstagram className="IconSpan" /> <p>@cutelariapets</p>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
                                <FaMapMarker className="IconSpan" /> <p>Rua José Francisco da Silva, Cristo Redentor, João Pessoa - PB</p>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
                                <FaWhatsapp className="IconSpan" /> <p>83 98616-6367</p>
                            </div>
                        </span>

                        <DivMap data-aos="zoom-in" data-aos-duration="800">
                            <iframe
                                className="iMap"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.892135093919!2d-34.87595799874432!3d-7.1538489623229875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace8318a644005%3A0x55a664f4e0d729bc!2sR.%20Jos%C3%A9%20Francisco%20da%20Silva%20-%20Cristo%20Redentor%2C%20Jo%C3%A3o%20Pessoa%20-%20PB!5e0!3m2!1spt-BR!2sbr!4v1736117929058!5m2!1spt-BR!2sbr"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </DivMap>
                    </DivSpan>
                </Divpart2>

            </Section3>


        </General>
    )
}
