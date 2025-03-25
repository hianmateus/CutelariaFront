
import {
    General, Section1, Span1, ButtonM,
    ButtonC, Section2, DivMarks, MarkInfo,
    Section3, Section4, Section5, Section6,
    Section7, AboutBlades, TypeBlades,
    BladesCategory, BladeType, IconSec5, ImageExample
} from "./styles"

import MarkPropetz from '../../assets/imgs/Laminas/LogoPropetz.png'
import MarkAndis from '../../assets/imgs/Laminas/LogoAndis.png'
import MarkOster from '../../assets/imgs/Laminas/LogoOster.png'
import MarkWahl from '../../assets/imgs/Laminas/LogoWahl.png'
import MarkPrecision from '../../assets/imgs/Laminas/LogoPrecision.png'
import LMimage1 from '../../assets/imgs/Laminas/LMimage2.png'
import LMimage2 from '../../assets/imgs/Laminas/LMimage1.png'
import Blade1 from '../../assets/imgs/Laminas/MetalLamina.png'
import Blade2 from '../../assets/imgs/Laminas/CeramicaLamina.png'
import LaminaParts from '../../assets/imgs/Laminas/LaminaParts.png'
import LaminaAço from '../../assets/imgs/Laminas/LaminadeAço.png'
import LaminaCarbono from '../../assets/imgs/Laminas/LaminadeCarbono.png'
import LaminaCeramica from '../../assets/imgs/Laminas/LaminadeCeramica.png'
import GoldBlade from '../../assets/imgs/Laminas/LMGold.png'

import IconMN1 from '../../assets/imgs/icons/IconMN1.png'
import IconMN2 from '../../assets/imgs/icons/IconMN2.png'
import IconMN3 from '../../assets/imgs/icons/IconMN3.png'

import { useCart } from "../../hooks/CartContext"
import { MenuProduct } from "../../components";
import { useEffect, useState } from "react"

import AOS from 'aos'
import 'aos/dist/aos.css'

export function Laminas() {
    const [isBGVisible, setIsBGVisible] = useState(false);
    const { activeCategory, setActiveCategory, typeProduct, setTypeProduct } = useCart();

    useEffect(() => {
        AOS.init({
        });
    }, [])

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <General>
            <MenuProduct isBGVisible={isBGVisible}
                setIsBGVisible={setIsBGVisible}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                typeProduct={typeProduct} />

            <Section1>
                <Span1 data-aos="flip-left" data-aos-duration="800">
                    <h1>LAMINAS DE TOSA MAIS USADAS PARA RESULTADOS IMPECAVEIS</h1>

                    <section>
                        <p>Entenda a diferança entre as Laminas</p>

                        <div>
                            <ButtonM onClick={() => scrollToSection("Metal")}>METAL</ButtonM>
                            <ButtonC onClick={() => scrollToSection("Ceramica")}>CERÂMICA</ButtonC>
                        </div>
                    </section>
                </Span1>
            </Section1>

            <Section2>
                <h1 data-aos="fade-down" data-aos-duration="800">MARCAS POPULARES</h1>

                <DivMarks>
                    <MarkInfo data-aos="flip-left" data-aos-duration="800">
                        <div className="ImageMarkDiv">
                            <img src={MarkPropetz} alt="Marca-logo" />
                        </div>

                        <div className="DescMark">
                            <img src={MarkPropetz} alt="Marca-logo" />

                            <p>Conhecida pela durabilidade e qualidade de suas lâminas.
                                Feitas em Aço inoxidável tratado com Tecnologia de resfriamento,
                                fácil manutenção.</p>
                        </div>
                    </MarkInfo>
                    <MarkInfo data-aos="flip-left" data-aos-duration="800" data-aos-delay="200">
                        <div className="ImageMarkDiv">
                            <img src={MarkAndis} alt="Marca-logo" />
                        </div>

                        <div className="DescMark">
                            <img src={MarkAndis} alt="Marca-logo" />

                            <p>Conhecida pela durabilidade e qualidade de suas lâminas.
                                Feitas em Aço inoxidável tratado com Tecnologia de resfriamento,
                                fácil manutenção.</p>
                        </div>
                    </MarkInfo>
                    <MarkInfo data-aos="flip-left" data-aos-duration="800" data-aos-delay="400">
                        <div className="ImageMarkDiv">
                            <img src={MarkOster} alt="Marca-logo" />
                        </div>

                        <div className="DescMark">
                            <img src={MarkOster} alt="Marca-logo" />

                            <p>Uma das marcas mais tradicionais no mercado de lâminas de tosa.
                                Feitas de Aço carbono endurecido com Alta precisão,
                                facil troca de lâminas</p>
                        </div>
                    </MarkInfo>
                    <MarkInfo data-aos="flip-left" data-aos-duration="800" data-aos-delay="600">
                        <div className="ImageMarkDiv">
                            <img src={MarkWahl} alt="Marca-logo" />
                        </div>

                        <div className="DescMark">
                            <img src={MarkWahl} alt="Marca-logo" />

                            <p>Popular tanto entre profissionais quanto para uso doméstico.
                                Feitas com Aço de alta precisão com versatilidade,
                                lâminas autoafiáveis.</p>
                        </div>
                    </MarkInfo>
                    <MarkInfo data-aos="flip-left" data-aos-duration="800" data-aos-delay="800">
                        <div className="ImageMarkDiv">
                            <img src={MarkPrecision} alt="Marca-logo" />
                        </div>

                        <div className="DescMark">
                            <img src={MarkPrecision} alt="Marca-logo" />

                            <p>Conhecida pela durabilidade e qualidade de suas lâminas.
                                Feitas em Aço inoxidável tratado com Tecnologia de resfriamento,
                                fácil manutenção.</p>
                        </div>
                    </MarkInfo>
                </DivMarks>
            </Section2>

            <Section3>
                <p data-aos="fade-down" data-aos-duration="800">As Lâminas de tosa variam em Matérial, Tamanho e Formato, sendo escolhidas
                    conforme o tipo de pelagem e a preferência do tosador. Manter as Lâminas
                    limpas e lubrificadas é essencial para cortes eficazes e maior durabilidade</p>
                <p data-aos="fade-down" data-aos-duration="800" data-aos-delay="400">A numeração das Lâminas de tosa indica a altura do corte, variando entre marcas
                    que, embora usem números semelhantes, podem diferir em Qualidade, Durabilidade
                    e Características.</p>
            </Section3>

            <Section4>
                <AboutBlades>
                    <h2 data-aos="fade-down" data-aos-duration="800">MATERIAIS DAS LÂMINAS</h2>

                    <TypeBlades>
                        <div data-aos="flip-left" data-aos-duration="800" data-aos-delay="400">
                            <img src={LaminaAço} alt="imagem-exmeplo-lamina-de-aço" />

                            <p><span>Aço Inoxidável</span>
                                , Resistente à ferrugem e facil de manter. Ideal para uso prolongado e em ambientes úmidos</p>
                        </div>

                        <div data-aos="flip-left" data-aos-duration="800" data-aos-delay="600">
                            <img src={LaminaCarbono} alt="imagem-exmeplo-lamina-de-carbono" />

                            <p><span>Aço Carbono</span>, Conhecido por sua durabilidade e capacidade de manter o fio por muito tempo, embora seja mais susvetível</p>
                        </div>

                        <div data-aos="flip-left" data-aos-duration="800" data-aos-delay="800">
                            <img src={LaminaCeramica} alt="imagem-exmeplo-lamina-de-ceramica" />

                            <p><span>Apenas o Cortante de Ceramica</span>, Extremamente leve, mantém-se afiada por mais tempo e aquece menos, mas é frágil e pode quebrar com facilidade</p>
                        </div>
                    </TypeBlades>
                </AboutBlades>

                <BladesCategory>
                    <BladeType onClick={() => {
                        setIsBGVisible(true)
                        setActiveCategory(1)
                        setTypeProduct('Acabamento')
                    }} data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
                        <div className="BlackPoint"></div>

                        <div>
                            <img src={GoldBlade} alt="imagem-Lamina-Simbolo" />

                            <h3>TOSA DE ACABAMENTO</h3>
                            <p>Estas são projetadas para cortes finos e detalhados,
                                como contornos de rosto, patas e outras áreas delicadas</p>
                        </div>
                    </BladeType>

                    <BladeType onClick={() => {
                        setIsBGVisible(true)
                        setActiveCategory(1)
                        setTypeProduct('Desbaste')
                    }} data-aos="fade-right" data-aos-duration="800" data-aos-delay="600">
                        <div className="BlackPoint"></div>

                        <div>
                            <img src={GoldBlade} alt="imagem-Lamina-Simbolo" />

                            <h3>TOSA DE DESBASTE</h3>
                            <p>Estas são projetadas para cortes finos e detalhados,
                                como contornos de rosto, patas e outras áreas delicadas</p>
                        </div>
                    </BladeType>

                    <BladeType onClick={() => {
                        setIsBGVisible(true)
                        setActiveCategory(1)
                        setTypeProduct('Higiênica')
                    }} data-aos="fade-right" data-aos-duration="800" data-aos-delay="800">
                        <div className="BlackPoint"></div>

                        <div>
                            <img src={GoldBlade} alt="imagem-Lamina-Simbolo" />

                            <h3>TOSA HIGIÊNICA</h3>
                            <p>Estas são projetadas para cortes finos e detalhados,
                                como contornos de rosto, patas e outras áreas delicadas</p>
                        </div>
                    </BladeType>
                </BladesCategory>

            </Section4>

            <Section5>
                <ImageExample src={LaminaParts} alt="Partes-da-Lamina" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200"/>

                <div className="SpanSec5">
                    <div data-aos="fade-down" data-aos-duration="800">
                        <IconSec5 src={IconMN1} />
                        <span>Remova os pelos das Lâminas após o uso com uma escova macia</span>
                    </div>

                    <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="200">
                        <IconSec5 src={IconMN2} />
                        <span>Aplique óleo nas Lâminas após o uso para garantir cortes suaves e maior durabilidade</span>
                    </div>

                    <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="400">
                        <IconSec5 src={IconMN3} />
                        <span>Guarde as Lâminas em local seco e seguro, longe de quedas e umidade</span>
                    </div>
                </div>
            </Section5>

            <Section6>
                <img src={LMimage1} alt="Imagem-de-Lamina-de-Ceramica" data-aos="fade-left" data-aos-duration="800"/>

                <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="500">
                    <h3>Vantagem das Lâminas de Tosa: Metal vs Cerâmica</h3>

                    <p>A escolha das Lâminas depende das preferências do tosador,
                        do tipo de animal e da pelagem. Cuidados adequados garantem
                        desempenho consistente e maior durabilidade</p>
                </div>

                <img src={LMimage2} alt="Imagem-de-Lamina-de-Metal" data-aos="fade-right" data-aos-duration="800"/>
            </Section6>

            <Section7 id="Metal">
                <section className="Sec17">
                    <img src={Blade1} alt="imagem-exemplo" data-aos="fade-left" data-aos-duration="800"/>

                    <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
                        <p><span className="TileLM">Disponibilidade</span>São amplamente disponíveis e oferecem uma variedade de opções para diferentes necessidades de tosa</p>
                        <p><span className="TileLM">Custo-Efetivas</span>Geralmente são mais acessíveis do que as Lâminas de cerâmica, tornando-se uma opção econômica para tosadores profissionais e amadores</p>
                        <p><span className="TileLM">Robustas e Duráveis</span>Feitas de aço inoxidável ou ligas metálicas, proporcionam uma alta resistência e durabilidade</p>
                        <p><span className="TileLM">Alta Qualidade de Afiação</span>Oferecem cortes precisos e suaves devido à sua qualidade de afiação</p>
                    </div>
                </section>

                <section className="Sec27" id="Ceramica">
                    <img src={Blade2} alt="imagem-exemplo" data-aos="fade-left" data-aos-duration="800"/>

                    <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
                        <p><span className="TileLC">Leveza</span>São mais leves do que as Lâminas de Metal, o que reduz a fadiga durante a tosa prolongada</p>
                        <p><span className="TileLC">Resistencia ao Calor</span>Tem uma capacidade maior de dissipar o calor, minimizando o risco de queimar o animal durante a tosa</p>
                        <p><span className="TileLC">Hipoalergênicas</span>Por não serem porosas, são menos propensas a acumular bactérias e causar irritações na pele do animal, sendo adequadas para animal com pele sensível</p>
                        <p><span className="TileLC">Durabilidade da Afiação</span>Tendem a manter, sua afiação por mais tempo do que as Lâminas de metal, reduzindo a necessidade de afiação frequente</p>
                    </div>
                </section>
            </Section7>


        </General>
    )
}