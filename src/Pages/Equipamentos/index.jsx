import {
    General, Section1, Section2, Section3,
    Section4, Section5, Sec1Div, PSec1,
    Sec2Div, ImgSec2, DigEquip, Sec3Desc,
    Sec3Div, Sec3Title, MachineDiv, DivMarks,
    Mark, Sec4Desc, Sec4Title, DivCuidados,
    Titlesec5, Psec5, Black
} from "./styles"

import Sec1exemplo from '../../assets/imgs/Equipamentos/Exequipament.png'
import Sec2exemplo from '../../assets/imgs/Equipamentos/Exequipament1.png'

import Equipamentos1 from '../../assets/imgs/Equipamentos/Equipamentos1.png'
import Equipamentos2 from '../../assets/imgs/Equipamentos/Equipamentos2.png'
import Equipamentos3 from '../../assets/imgs/Equipamentos/Equipamentos3.png'
import Equipamentos4 from '../../assets/imgs/Equipamentos/Equipamentos4.png'
import Equipamentos5 from '../../assets/imgs/Equipamentos/Equipamentos5.png'
import Equipamentos6 from '../../assets/imgs/Equipamentos/Equipamentos6.png'


import Mark1 from '../../assets/imgs/Equipamentos/Mark1.png'
import Mark2 from '../../assets/imgs/Equipamentos/Mark2.png'
import Mark3 from '../../assets/imgs/Equipamentos/Mark3.png'
import Mark4 from '../../assets/imgs/Equipamentos/Mark4.png'
import Mark5 from '../../assets/imgs/Equipamentos/Mark5.png'
import Mark6 from '../../assets/imgs/Equipamentos/Mark6.png'

import IconCuidado1 from '../../assets/imgs/Equipamentos/IconCuidado1.png'
import IconCuidado2 from '../../assets/imgs/Equipamentos/IconCuidado2.png'
import IconCuidado3 from '../../assets/imgs/Equipamentos/IconCuidado3.png'
import IconCuidado4 from '../../assets/imgs/Equipamentos/IconCuidado4.png'

import { useCart } from "../../hooks/CartContext"
import { MenuProduct } from "../../components";
import { useEffect, useState } from "react"

import AOS from 'aos'
import 'aos/dist/aos.css'

export function Equipamentos() {
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
                <Sec1Div>
                    <h1>Banhos mais Rapidos e Eficiêntes. <Black>O melhor Equipamento</Black> para Profissionais</h1>

                    <PSec1>Ferramentas essênciais tanto para groomers e donos que cuidam da aparencia e higiene dos pets</PSec1>

                    <div onClick={() => scrollToSection("Equipamentos")}>
                        <p>Encontre o Equipamento Ideal</p>
                    </div>
                </Sec1Div>
            </Section1>

            <Section2>
                <Sec2Div>
                    <ImgSec2 src={Sec2exemplo} alt="exemplo-de-equipamento" />

                    <div>
                        <h2>SECADORES</h2>
                        <p>Combina fluxo de ar e calor moderado para secar a pelagem do animal de maneira mais uniforme e cuidadosa.</p>
                        <p>Após o banho, é usado para secar e modelar a pelagem, especialmente em raças com pelo longo ou volumoso,
                            como Poodles, Shih Tzus e Maltês</p>
                    </div>
                </Sec2Div>

                <Sec2Div>
                    <div>
                        <h2>SOPRADORES</h2>
                        <p>Projetado para soprar grandes volumes de ar frio ou levemente aquecido em alta velocidade,
                            sendo mais focado na remoção de água, sujeira e subpelos soltos.</p>
                        <p>Indicado para a pré-secagem após o banho, especialmente em cães com pelagem densa, dupla ou longa,
                            como Golden Retrievers, Huskies e Pastores Alemães.</p>
                    </div>

                    <ImgSec2 src={Sec1exemplo} alt="exemplo-de-equipamento" />
                </Sec2Div>
            </Section2>

            <Section3>
                <Sec3Title>ESQUIPAMENTOS</Sec3Title>
                <Sec3Desc>Os Equipamentos que Transformam o Cuidado Com Seu Pet</Sec3Desc>

                <Sec3Div id="Equipamentos">
                    <MachineDiv>
                        <DigEquip onClick={() => {
                            setIsBGVisible(true)
                            setActiveCategory(4)
                            setTypeProduct('Secador')
                        }}>
                            <img src={Equipamentos1} alt="exemplo-de-equipamentos" />
                        </DigEquip>

                        <h3>SECADORES</h3>

                        <p>COMPACTOS E POTENTES, PERFEITOS PARA PET SHOPS E GROOMERS PROFISSIONAIS</p>
                    </MachineDiv>

                    <MachineDiv>
                        <DigEquip onClick={() => {
                            setIsBGVisible(true)
                            setActiveCategory(4)
                            setTypeProduct('Secadora')
                        }}>
                            <img src={Equipamentos2} alt="exemplo-de-equipamentos" />
                        </DigEquip>

                        <h3>SECADORAS</h3>

                        <p>CAPACIDADE DE SECAR MULTIPLOS PET SIMULTANEAMENTE</p>
                    </MachineDiv>

                    <MachineDiv>
                        <DigEquip onClick={() => {
                            setIsBGVisible(true)
                            setActiveCategory(4)
                            setTypeProduct('Soprador')
                        }}>
                            <img src={Equipamentos3} alt="exemplo-de-equipamentos" />
                        </DigEquip>

                        <h3>SOPRADORES</h3>

                        <p>COMPACTOS E POTENTES, PERFEITOS PARA PET SHOPS E GROOMERS PROFISSIONAIS</p>
                    </MachineDiv>

                    <MachineDiv>
                        <DigEquip onClick={() => {
                            setIsBGVisible(true)
                            setActiveCategory(4)
                            setTypeProduct('Canil')
                        }}>
                            <img src={Equipamentos4} alt="exemplo-de-equipamentos" />
                        </DigEquip>

                        <h3>CANIS</h3>

                        <p>COMPACTOS E POTENTES, PERFEITOS PARA PET SHOPS E GROOMERS PROFISSIONAIS</p>
                    </MachineDiv>

                    <MachineDiv>
                        <DigEquip onClick={() => {
                            setIsBGVisible(true)
                            setActiveCategory(4)
                            setTypeProduct('Banheira')
                        }}>
                            <img src={Equipamentos5} alt="exemplo-de-equipamentos" />
                        </DigEquip>

                        <h3>BANHEIRAS</h3>

                        <p>COMPACTOS E POTENTES, PERFEITOS PARA PET SHOPS E GROOMERS PROFISSIONAIS</p>
                    </MachineDiv>

                    <MachineDiv>
                        <DigEquip onClick={() => {
                            setIsBGVisible(true)
                            setActiveCategory(4)
                            setTypeProduct('Mesa')
                        }}>
                            <img src={Equipamentos6} alt="exemplo-de-equipamentos" />
                        </DigEquip>

                        <h3>MESAS</h3>

                        <p>COMPACTOS E POTENTES, PERFEITOS PARA PET SHOPS E GROOMERS PROFISSIONAIS</p>
                    </MachineDiv>
                </Sec3Div>
            </Section3>

            <Section4>
                <Sec4Title>MARCAS</Sec4Title>
                <Sec4Desc>As Marcas Mais Conhecidas entre os Profissionais</Sec4Desc>

                <DivMarks>
                    <Mark>
                        <div className="ImageMarkDiv">
                            <img src={Mark1} alt="exeplo-da-logo-da-marca" />
                        </div>

                        <div className="DescMark">
                            <img src={Mark1} alt="Marca-logo" />

                            <p>Reconhecida por fabricar secadores e sopradores de alta potência e durabilidade.
                                Ideal para uso profissional em pet shops e clínicas veterinárias.</p>
                        </div>
                    </Mark>
                    <Mark>
                        <div className="ImageMarkDiv">
                            <img src={Mark2} alt="exeplo-da-logo-da-marca" />
                        </div>

                        <div className="DescMark">
                            <img src={Mark2} alt="Marca-logo" />

                            <p>Oferecendo secadores e sopradores que combinam potência e praticidade,
                                ideais para espaços menores e uso profissional.</p>
                        </div>
                    </Mark>
                    <Mark>
                        <div className="ImageMarkDiv">
                            <img src={Mark3} alt="exeplo-da-logo-da-marca" />
                        </div>

                        <div className="DescMark">
                            <img src={Mark3} alt="Marca-logo" />

                            <p>Conhecida por seus secadores e sopradores com tecnologia avançada e materiais resistentes,
                                com desempenho confiável e secagem rápida para diversos tipos de pelagem.</p>
                        </div>
                    </Mark>
                    <Mark>
                        <div className="ImageMarkDiv">
                            <img src={Mark4} alt="exeplo-da-logo-da-marca" />
                        </div>

                        <div className="DescMark">
                            <img src={Mark4} alt="Marca-logo" />

                            <p>Especializada em sopradores e secadores de alta performance,
                                oferece produtos robustos e eficientes, garantindo maior agilidade
                                e conforto no processo de secagem.</p>
                        </div>
                    </Mark>
                    <Mark>
                        <div className="ImageMarkDiv">
                            <img src={Mark5} alt="exeplo-da-logo-da-marca" />
                        </div>

                        <div className="DescMark">
                            <img src={Mark5} alt="Marca-logo" />

                            <p>Marca que desenvolve equipamentos acessíveis e eficientes,
                                sendo uma opção viável para tosadores que buscam qualidade com um bom custo-benefício.</p>
                        </div>
                    </Mark>
                    <Mark>
                        <div className="ImageMarkDiv">
                            <img src={Mark6} alt="exeplo-da-logo-da-marca" />
                        </div>

                        <div className="DescMark">
                            <img src={Mark6} alt="Marca-logo" />

                            <p>Combina tecnologia e resistência para proporcionar uma secagem rápida e eficaz,
                                atendendo às necessidades de profissionais exigentes.</p>
                        </div>
                    </Mark>
                </DivMarks>
            </Section4>

            <Section5>
                <DivCuidados>
                    <img src={IconCuidado1} alt="icon-imagem" />

                    <Titlesec5>Escolha o Equipamento Certo</Titlesec5>
                    <Psec5>Baseado no tamanho e tipo de pelo do seu pet</Psec5>
                </DivCuidados>

                <DivCuidados>
                    <img src={IconCuidado2} alt="icon-imagem" />

                    <Titlesec5>Temperatura Adequada</Titlesec5>
                    <Psec5>Use uma temperatura que seja confortavel para o pet</Psec5>
                </DivCuidados>

                <DivCuidados>
                    <img src={IconCuidado3} alt="icon-imagem" />

                    <Titlesec5>Distância Adequada</Titlesec5>
                    <Psec5>Mantenha o secador a uma distância segura para evitar queimaduras</Psec5>
                </DivCuidados>

                <DivCuidados>
                    <img src={IconCuidado4} alt="icon-imagem" />

                    <Titlesec5>Treine o Pet</Titlesec5>
                    <Psec5>Acostume o pet gradualmente ao barulho e sensação do secador</Psec5>
                </DivCuidados>
            </Section5>
        </General>
    )
}