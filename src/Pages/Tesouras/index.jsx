
import {
    General, Section1, Section2,
    Section3, Section4, Section5,
    Section6, Section7, Img1, Img2,
    SteelDiv, Sec1Span, AboutBlade, AboutSteel,
    Sec2Info, InfoCuidados, Black, BladesTypes,
    TypeBlade, DivBlade, PBlade, MarksBlade, MarkDiv,
    Sec6Part1, BladeTS, DescTS, DivImageTS
    , TitleTS, SpanSteel, ImagemTS, IconParagrafo
} from "./styles"

import BackLeft from '../../assets/imgs/Tesouras/BackLeft.png'
import BackRight from '../../assets/imgs/Tesouras/BackRight.png'

import Steel420 from '../../assets/imgs/Tesouras/Steels420.png'
import Steel440 from '../../assets/imgs/Tesouras/Steels440.png'
import Steelvg10 from '../../assets/imgs/Tesouras/Steelsvg10.png'
import Steelvg1 from '../../assets/imgs/Tesouras/Steelsvg1.png'

import TsSymbol from '../../assets/imgs/Tesouras/iconTesoura.png'
import iconP from '../../assets/imgs/Tesouras/iconP.png'

import Marks1 from '../../assets/imgs/Tesouras/Marks1.png'
import Marks2 from '../../assets/imgs/Tesouras/Marks2.png'
import Marks3 from '../../assets/imgs/Tesouras/Marks3.png'
import Marks4 from '../../assets/imgs/Tesouras/Marks4.png'
import Marks5 from '../../assets/imgs/Tesouras/Marks5.png'

import Ponta1 from '../../assets/imgs/Tesouras/Ponta1.png'
import Ponta2 from '../../assets/imgs/Tesouras/Ponta2.png'
import Ponta3 from '../../assets/imgs/Tesouras/Ponta3.png'
import Ponta4 from '../../assets/imgs/Tesouras/Ponta4.png'
import Ponta5 from '../../assets/imgs/Tesouras/Ponta5.png'

import { useCart } from "../../hooks/CartContext"
import { MenuProduct } from "../../components";
import { useEffect, useState } from "react"

import AOS from 'aos'
import 'aos/dist/aos.css'

export function Tesouras() {
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
                <Sec1Span data-aos="flip-right" data-aos-duration="800">
                    <h1>TESOURAS MAIS USADAS PARA UM <Black>ACABAMENTO IMPECÁVEL</Black></h1>
                    <p data-aos="fade-down" data-aos-duration="500" data-aos-delay="300">Entenda Mais Sobre</p>

                    <div>
                        <AboutSteel data-aos="fade-left" data-aos-duration="500" data-aos-delay="500" onClick={() => scrollToSection("Aços")}>Aço das Tesouras</AboutSteel>
                        <AboutBlade data-aos="fade-left" data-aos-duration="500" data-aos-delay="600" onClick={() => scrollToSection("Tesouras")}>Tipos de Tesouras</AboutBlade>
                    </div>
                </Sec1Span>
            </Section1>

            <Section2>
                <Sec2Info>
                    <div data-aos="flip-left" data-aos-duration="500" data-aos-delay="300">
                        <h5>Armazenamento Adequado</h5>
                        <p>Guarde as tesouras em um local seco e, se possivel, em um estojo próprio que proteja contra umidade</p>
                    </div>

                    <div data-aos="flip-left" data-aos-duration="500" data-aos-delay="500">
                        <h5>Manuseio Cuidadoso</h5>
                        <p>Não deixe as tesouras caírem no chão, pois impacto pode causar um empeno ou desalhinhamento das Lâminas</p>
                    </div>

                    <div data-aos="flip-left" data-aos-duration="500" data-aos-delay="700">
                        <h5>Afiamento Regular</h5>
                        <p>Leve as tesouras para um profissional afiar regularmente, dependendo da frequência de uso. Lâminas cegas exigem mais esforço e podem danificar os pelos</p>
                    </div>
                </Sec2Info>

                <InfoCuidados data-aos="fade-down" data-aos-duration="800" data-aos-delay="300">
                    <p className="InfoSec2">Seguindo esses cuidados, suas tesouras de tosa permanecerão em excelente estado,
                        garantindo um corte preciso e eficiente, além de aumentar sua durabilidade e desempenho</p>
                </InfoCuidados>
            </Section2>

            <Section3 data-aos="zoom-out" data-aos-duration="800">
                <Img1 src={BackLeft} data-aos="fade-left" data-aos-duration="800" data-aos-delay="400"/>
                <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="600">
                    <p>Geralmente feitas de aço inoxidável de Alta Qualidade, essas tesouras garantem durabilidade,
                        resistencia à corrosão e retenção de afiação proporcionando cortes suaves e precisos</p>

                    <p>Cada tipo de Tesoura exige habilidades especificas e o uso de diferentes tesouras, como retas, curvas e desbaste</p>
                </div>
                <Img2 src={BackRight} data-aos="fade-right" data-aos-duration="800" data-aos-delay="450"/>
            </Section3>

            <Section4 id="Tesouras">
                <h3 data-aos="fade-down" data-aos-duration="800">Encontre a <Black>Tesoura Certa</Black> para cada necessidade e leve seu <Black>trabalho ao Próximo Nível</Black></h3>

                <BladesTypes>
                    <TypeBlade data-aos="fade-right" data-aos-duration="800">
                        <DivBlade>
                            <img src={Ponta1} alt="Imagem-Ponta-De-Tesoura" />
                        </DivBlade>
                        <PBlade>Perfeita para cortes retos e acabamentos precisos em áreas planas</PBlade>
                    </TypeBlade>

                    <TypeBlade data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
                        <DivBlade>
                            <img src={Ponta2} alt="Imagem-Ponta-De-Tesoura" />
                        </DivBlade>
                        <PBlade>Indicada para desbaste suave, criando transições leves e naturais</PBlade>
                    </TypeBlade>

                    <TypeBlade data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
                        <DivBlade>
                            <img src={Ponta3} alt="Imagem-Ponta-De-Tesoura" />
                        </DivBlade>
                        <PBlade>Ideal para desbaste suave, criando transições leves e naturais</PBlade>
                    </TypeBlade>

                    <TypeBlade data-aos="fade-right" data-aos-duration="800" data-aos-delay="600">
                        <DivBlade>
                            <img src={Ponta4} alt="Imagem-Ponta-De-Tesoura" />
                        </DivBlade>
                        <PBlade>Feita para desbaste mais intenso, removendo grande quantidade de pelo com eficiência</PBlade>
                    </TypeBlade>

                    <TypeBlade data-aos="fade-right" data-aos-duration="800" data-aos-delay="800">
                        <DivBlade>
                            <img src={Ponta5} alt="Imagem-Ponta-De-Tesoura" />
                        </DivBlade>
                        <PBlade>Essencial para áreas sensiveis, garantindo segurança ao cortar ao redor do rosto e patas</PBlade>
                    </TypeBlade>
                </BladesTypes>

                <p data-aos="fade-down" data-aos-duration="800" data-aos-delay="100" className="Sec4p">Ao escolher as tesouras certas para cada tarefa no grooming, a precisão e a segurança do corte fazem toda a diferença</p>
            </Section4>

            <Section5>
                <h2 data-aos="fade-down" data-aos-duration="800">MARCAS <Black>POPULARES</Black></h2>

                <MarksBlade>
                    <MarkDiv data-aos="fade-left" data-aos-duration="400" data-aos-delay="200">
                        <div className="ImageMarkDiv">
                            <img src={Marks1} alt="Marca-logo" />
                        </div>

                        <div className="DescMark">
                            <img src={Marks1} alt="Marca-logo" />

                            <p>Qualidade e durabilidade. Indicada tanto para profissionais quanto para uso doméstico.</p>
                        </div>
                    </MarkDiv>

                    <MarkDiv data-aos="fade-left" data-aos-duration="400" data-aos-delay="400">
                        <div className="ImageMarkDiv">
                            <img src={Marks2} alt="Marca-logo" />
                        </div>

                        <div className="DescMark">
                            <img src={Marks2} alt="Marca-logo" />

                            <p>Com design ergonômico e cortes precisos. Bastante popular entre groomers que buscam eficiência e estilo.</p>
                        </div>
                    </MarkDiv>

                    <MarkDiv data-aos="fade-left" data-aos-duration="400" data-aos-delay="600">
                        <div className="ImageMarkDiv">
                            <img src={Marks3} alt="Marca-logo" />
                        </div>

                        <div className="DescMark">
                            <img src={Marks3} alt="Marca-logo" />

                            <p>Destacando-se pela inovação,
                                materiais de alta qualidade e acabamento refinado. Muito utilizada por tosadores profissionais exigentes.</p>
                        </div>
                    </MarkDiv>

                    <MarkDiv data-aos="fade-left" data-aos-duration="400" data-aos-delay="800">
                        <div className="ImageMarkDiv">
                            <img src={Marks4} alt="Marca-logo" />
                        </div>

                        <div className="DescMark">
                            <img src={Marks4} alt="Marca-logo" />

                            <p>Desempenho e preço acessível,
                                sendo uma opção viável para iniciantes e profissionais que buscam um equilíbrio entre custo e qualidade.</p>
                        </div>
                    </MarkDiv>

                    <MarkDiv data-aos="fade-left" data-aos-duration="400" data-aos-delay="1000">
                        <div className="ImageMarkDiv">
                            <img src={Marks5} alt="Marca-logo" />
                        </div>

                        <div className="DescMark">
                            <img src={Marks5} alt="Marca-logo" />

                            <p>Suas tesouras são reconhecidas pela precisão e resistência, garantindo cortes suaves e conforto durante o uso prolongado.</p>
                        </div>
                    </MarkDiv>

                </MarksBlade>
            </Section5>

            <Section6>
                <Sec6Part1>
                    <BladeTS onClick={() => {
                        setIsBGVisible(true)
                        setActiveCategory(2)
                        setTypeProduct('Completa')
                    }} data-aos="fade-down" data-aos-duration="400" data-aos-delay="200">
                        <div className="WhitePoint"></div>

                        <DivImageTS>
                            <img src={TsSymbol} alt="imagem-examplo-tesoura" />
                        </DivImageTS>

                        <TitleTS>TOSA COMPLETA</TitleTS>
                        <DescTS>O corpo todo do cão é trabalhado com a tesoura, criando um corte mais personalizado</DescTS>
                    </BladeTS>

                    <BladeTS onClick={() => {
                        setIsBGVisible(true)
                        setActiveCategory(2)
                        setTypeProduct('Desbaste')
                    }} data-aos="fade-down" data-aos-duration="400" data-aos-delay="400">
                        <div className="WhitePoint"></div>

                        <DivImageTS>
                            <img src={TsSymbol} alt="imagem-examplo-tesoura" />
                        </DivImageTS>

                        <TitleTS data-aos="flip-left" data-aos-duration="400" data-aos-delay="400">TOSA DE DESBASTE</TitleTS>
                        <DescTS data-aos="flip-left" data-aos-duration="400" data-aos-delay="600">Focada na redução do volume do pelo, sem alterar drasticamente o comprimento</DescTS>
                    </BladeTS>

                    <BladeTS onClick={() => {
                        setIsBGVisible(true)
                        setActiveCategory(2)
                        setTypeProduct('Acabamento')
                    }} data-aos="fade-down" data-aos-duration="400" data-aos-delay="600">
                        <div className="WhitePoint"></div>

                        <DivImageTS>
                            <img src={TsSymbol} alt="imagem-examplo-tesoura" />
                        </DivImageTS>

                        <TitleTS data-aos="flip-left" data-aos-duration="400" data-aos-delay="600">TOSA DE ACABAMENTO</TitleTS>
                        <DescTS data-aos="flip-left" data-aos-duration="400" data-aos-delay="800">Feita para dar os Retoques finais e um acabamento mais limpo e suave após a tosa principal</DescTS>
                    </BladeTS>
                </Sec6Part1>

            </Section6>

            <Section7>
                <SteelDiv id="Aços">

                    <ImagemTS src={Steel420} alt="" />

                    <SpanSteel>
                        <h2>AÇO 420</h2>

                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo" /> Aço inoxidável econômico com boa resistência à corrosão</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo" /> 50-56 HRC (moderada)</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo" /> Facil de afiar e resistente à ferrugem</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo" /> Custo acessível e facil manutenção, perfeito para iniciantes ou uso leve</p>
                        </div>
                    </SpanSteel>
                </SteelDiv>

                <SteelDiv>

                    <SpanSteel>
                        <h2>AÇO 440</h2>

                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo" /> Aço com alta resistência à corrosão a excelente retenção de fio</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo" /> 50-60 HRC (alta durabilidade)</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo" /> Mantém o fio por mais tempo, bom para cortes exigentes</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo" /> Apesar de mais caro e difícil de afiar, é altamente resistente ao desgaste e extremamente durável,
                                adequado para uso profissionais contínuo</p>
                        </div>
                    </SpanSteel>

                    <ImagemTS src={Steel440} alt="" />

                </SteelDiv>

                <SteelDiv>

                    <ImagemTS src={Steelvg10} alt="" />

                    <SpanSteel>
                        <h2>AÇO VG-10</h2>

                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo" /> Aço japonês de alta qualidade, muito afiado e durável</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo" /> 60-62 HRC (excelente durabilidade)</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo" /> É mais frágil devido à dureza elevado, exigindo cuidado para evitar quedas ou torções</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo" /> Corte premium com extrema precisão, ideal para estilização e acabamentos sofísticados</p>
                        </div>
                    </SpanSteel>
                </SteelDiv>

                <SteelDiv>

                    <SpanSteel>
                        <h2>AÇO VG-1</h2>

                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo" /> Aço com equilíbrio entre durabilidade e facilidade de afiação</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo" /> 58-60 HRC (alta durabilidade)</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo" /> Mais resistente a impactos devido à dureza não ser tão alta e nem tão baixa</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo" /> Oferece um equilívrio excelente entre desempenho, durabilidade e facilidade de afiação</p>
                        </div>
                    </SpanSteel>

                    <ImagemTS src={Steelvg1} alt="" />
                </SteelDiv>
            </Section7>

        </General>
    )
}