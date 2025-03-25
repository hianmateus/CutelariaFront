
import {
    General, Section1, Section2, Section3,
    Section4, Section5, ButtonSec1, DivSec1,
    H1Sec1, Sec1P, DivSec2, H1Sec2, InfoSec2,
    TextSec2, TitleSec2, DescInfoSec3, DescSec3,
    DivEquip, DivIMG, DivSec3, H1Sec3, PDesc,
    PName, DescProduct, DescTitle, DivSec4,
    ProductDiv, Sec4Equipamento, TitleTop, TitlesSec4,
    DivSec5, InfoContainer, InfoImage, 
    PinfoSec5, Black, EquiTitle
} from "./styles"

import DogExample1 from '../../assets/imgs/Pentes/DogExample1.png'
import DogExample2 from '../../assets/imgs/Pentes/DogExample2.png'
import DogExample3 from '../../assets/imgs/Pentes/DogExample3.png'
import DogExample4 from '../../assets/imgs/Pentes/DogExample4.png'

import Infoimage1 from '../../assets/imgs/Pentes/Infoimage1.png'
import Infoimage2 from '../../assets/imgs/Pentes/Infoimage2.png'
import Infoimage3 from '../../assets/imgs/Pentes/Infoimage3.png'

import Recomend1 from '../../assets/imgs/Pentes/Recomend1.png'
import Recomend2 from '../../assets/imgs/Pentes/Recomend2.png'
import Recomend3 from '../../assets/imgs/Pentes/Recomend3.png'

import TypesInstrument1 from '../../assets/imgs/Pentes/TypesInstrument1.png'
import TypesInstrument2 from '../../assets/imgs/Pentes/TypesInstrument2.png'
import TypesInstrument3 from '../../assets/imgs/Pentes/TypesInstrument3.png'

import { useCart } from "../../hooks/CartContext"
import { MenuProduct } from "../../components";
import { useEffect, useState } from "react"

import AOS from 'aos'
import 'aos/dist/aos.css'

export function Pentes() {
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
                <DivSec1>
                    <H1Sec1>Ferramentas <Black>Essenciais para Higiêne</Black> e Bem-Estar</H1Sec1>

                    <Sec1P>Instrumentos que fazem a diferença no Bem-Estar do seu Pet</Sec1P>

                    <ButtonSec1 onClick={() => scrollToSection("Pentes")}>Produtos </ButtonSec1>
                </DivSec1>
            </Section1>

            <Section2>
                <H1Sec2>Por Que Usar Pentes para Pet?</H1Sec2>

                <DivSec2>

                    <InfoSec2>
                        <img src={DogExample1} alt="imagem-exemplo" />

                        <TitleSec2>Higiêne Impécavel</TitleSec2>

                        <TextSec2>Previne emaranhados que podem causar desconforto ou irritação</TextSec2>
                    </InfoSec2>

                    <InfoSec2>
                        <img src={DogExample2} alt="imagem-exemplo" />

                        <TitleSec2>Adeus aos Nós</TitleSec2>

                        <TextSec2>Remove sujeira, pelos mortos e possíveis parasitas com facilidade</TextSec2>
                    </InfoSec2>

                    <InfoSec2>
                        <img src={DogExample3} alt="imagem-exemplo" />

                        <TitleSec2>Pelagem Radiante</TitleSec2>

                        <TextSec2>Distribui os óleos naturais, deixando o pelo mais brilhante e saudável</TextSec2>
                    </InfoSec2>

                    <InfoSec2>
                        <img src={DogExample4} alt="imagem-exemplo" />

                        <TitleSec2>Cuidados com a Pele</TitleSec2>

                        <TextSec2>Facilita a identificação de lesões, ou parasitas</TextSec2>
                    </InfoSec2>
                </DivSec2>
            </Section2>

            <Section3>
                <H1Sec3>Pelagem Brilhante e Saudável</H1Sec3>
                <DescSec3>Descubra os Pentes Ideais para seu Pet</DescSec3>

                <DivSec3>
                    <DivEquip>
                        <DivIMG>
                            <img src={TypesInstrument1} alt="imagem-exemplo-produto" />
                        </DivIMG>

                        <div>
                            <PName>Dentes Largos, Finos ou Giratórios</PName>
                            <PDesc>Para pets de pelo médio a longo, especialmente para desembaraçar e alinhar os fios.</PDesc>
                        </div>
                    </DivEquip>

                    <DivEquip>
                        <DivIMG>
                            <img src={TypesInstrument2} alt="imagem-exemplo-produto" />
                        </DivIMG>

                        <div>
                            <PName>Cerdas Metálicas ou Flexíveis</PName>
                            <PDesc>Cães e gatos de pelo médio a longo, com subpelo ou tendência a nós.</PDesc>
                        </div>
                    </DivEquip>

                    <DivEquip>
                        <DivIMG>
                            <img src={TypesInstrument3} alt="imagem-exemplo-produto" />
                        </DivIMG>

                        <div>
                            <PName>Cerdas Macías ou de Borracha</PName>
                            <PDesc>Ideal para pets de pelo curto ou como toque final na escovação.</PDesc>
                        </div>
                    </DivEquip>
                </DivSec3>

                <DescInfoSec3>Os pentes são indispensáveis para manter a higiêne, saúde e aparencia do pelo dos animais.
                    Eles vêmem diferentes tipos, tamanhos e matériais, sendo cada um ideal para funções específicas e tipos de pelagem</DescInfoSec3>
            </Section3>

            <Section4 id="Pentes">
                <TitlesSec4>
                    <TitleTop>Dentes finos ou Largos?</TitleTop>
                    <DescTitle>Temos o Instrumento Certo para Cada Pelagem</DescTitle>
                </TitlesSec4>

                <DivSec4>
                    <Sec4Equipamento>
                        <ProductDiv onClick={() => {
                            setIsBGVisible(true)
                            setActiveCategory(5)
                            setTypeProduct('Pente')
                        }}>
                            <img src={Infoimage1} alt="Info-imagem-exemplo" />
                        </ProductDiv>

                        <EquiTitle>PENTES</EquiTitle>
                        <DescProduct>São acessórios com dentes finos ou largos, usados para desembaraçar e alinhar os pelos</DescProduct>
                    </Sec4Equipamento>

                    <Sec4Equipamento>
                        <ProductDiv onClick={() => {
                            setIsBGVisible(true)
                            setActiveCategory(5)
                            setTypeProduct('Rasqueadeira')
                        }}>
                            <img src={Infoimage2} alt="Info-imagem-exemplo" />
                        </ProductDiv>

                        <EquiTitle>RASQUEADEIRAS</EquiTitle>
                        <DescProduct>Possuem cerdas metálicas finas e levemente curvadas para remover subpelo soltos e nós superficiais</DescProduct>
                    </Sec4Equipamento>

                    <Sec4Equipamento>
                        <ProductDiv onClick={() => {
                            setIsBGVisible(true)
                            setActiveCategory(5)
                            setTypeProduct('Escova')
                        }}>
                            <img src={Infoimage3} alt="Info-imagem-exemplo" />
                        </ProductDiv>

                        <EquiTitle>ESCOVAS</EquiTitle>
                        <DescProduct>Escovas com cerdas macias, de borracha ou metálicas para finalizar a escovação e dar brilho ao pelo</DescProduct>
                    </Sec4Equipamento>
                </DivSec4>
            </Section4>

            <Section5>
                <DivSec5>
                    <InfoContainer>
                        <InfoImage>
                            <img src={Recomend1} alt="Exemplo-Cuidado-Imagem" />
                        </InfoImage>

                        <PinfoSec5>ESCOLHA UM PENTE QUE MELHOR SE ADAPTE AO SEU DIA DIA</PinfoSec5>
                    </InfoContainer>

                    <InfoContainer>
                        <InfoImage>
                            <img src={Recomend2} alt="Exemplo-Cuidado-Imagem" />
                        </InfoImage>

                        <PinfoSec5>DENTES FINOS SÃO MELHORES PARA DETALHES, ENQUANTO OS LARGOS COBREM ÁREAS MAIORES</PinfoSec5>
                    </InfoContainer>

                    <InfoContainer>
                        <InfoImage>
                            <img src={Recomend3} alt="Exemplo-Cuidado-Imagem" />
                        </InfoImage>

                        <PinfoSec5>PREFIRA MATÉRIAIS DURÁVEIS E SEGUROS, COMO AÇO INOXIDÁVEL PARA OS DENTES</PinfoSec5>
                    </InfoContainer>
                </DivSec5>
            </Section5>
        </General>
    )
}