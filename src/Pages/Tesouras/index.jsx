
import {
    General, Section1, Section2,
    Section3, Section4, Section5,
    Section6, Section7, Img1, Img2,
    SteelDiv, Sec1Span, AboutBlade, AboutSteel,
    Sec2Info, InfoCuidados, Black, BladesTypes,
    TypeBlade, DivBlade, PBlade, MarksBlade,
    Sec6Part1, BladeTS,DescTS,DivImageTS
    ,TitleTS, SpanSteel, ImagemTS, IconParagrafo
} from "./styles"

import BackLeft from '../../assets/imgs/Tesouras/BackLeft.png'
import BackRight from '../../assets/imgs/Tesouras/BackRight.png'

import Steel420 from '../../assets/imgs/Tesouras/Steels420.png'
import Steel440 from '../../assets/imgs/Tesouras/Steels440.png'
import Steelvg10 from '../../assets/imgs/Tesouras/Steelsvg10.png'
import Steelvg1 from '../../assets/imgs/Tesouras/Steelsvg1.png'

import TsSymbol from '../../assets/imgs/Tesouras/iconTesoura.png'
import iconP from '../../assets/imgs/Tesouras/iconP.png'


export function Tesouras() {
    return (
        <General>
            <Section1>
                <Sec1Span>
                    <h1>TESOURAS MAIS USADAS PARA UM <Black>ACABAMENTO IMPECÁVEL</Black></h1>
                    <p>Entende Mais Sobre</p>

                    <div>
                        <AboutSteel>Aço das Tesouras</AboutSteel>
                        <AboutBlade>Tipos de Tesouras</AboutBlade>
                    </div>
                </Sec1Span>
            </Section1>

            <Section2>
                <Sec2Info>
                    <div>
                        <h5>Armazenamento Adequado</h5>
                        <p>Guarde as tesouras em um local seco e, se possivel, em um estojo próprio que proteja contra umidade</p>
                    </div>

                    <div>
                        <h5>Manuseio Cuidadoso</h5>
                        <p>Não deixe as tesouras caírem no chão, pois impacto pode causar um empeno ou desalhinhamento das Lâminas</p>
                    </div>

                    <div>
                        <h5>Afiamento Regular</h5>
                        <p>Leve as tesouras para um profissional afiar regularmente, dependendo da frequência de uso. Lâminas cegas exigem mais esforço e podem danificar os pelos</p>
                    </div>
                </Sec2Info>

                <InfoCuidados>
                    <p className="InfoSec2">Seguindo esses cuidados, suas tesouras de tosa permanecerão em excelente estado,
                         garantindo um corte preciso e eficiente, além de aumentar sua durabilidade e desempenho</p>
                </InfoCuidados>
            </Section2>

            <Section3>
                <Img1 src={BackLeft} />
                <div>
                    <p>Geralmente feitas de aço inoxidável de Alta Qualidade, essas tesouras garantem durabilidade,
                         resistencia à corrosão e retenção de afiação proporcionando cortes suaves e precisos</p>

                    <p>Cada tipo de Tesoura exige habilidades especificas e o uso de diferentes tesouras, como retas, curvas e desbaste</p>
                </div>
                <Img2 src={BackRight} />
            </Section3>

            <Section4>
                <h3>Encontre a <Black>Tesoura Certa</Black> para cada necessidade e leve seu <Black>trabalho ao Próximo Nível</Black></h3>

                <BladesTypes>
                    <TypeBlade>
                        <DivBlade>
                            <img src="" alt="Imagem-Ponta-De-Tesoura" />
                        </DivBlade>
                        <PBlade>Perfeita para cortes retos e acabamentos precisos em áreas planas</PBlade>
                    </TypeBlade>

                    <TypeBlade>
                        <DivBlade>
                            <img src="" alt="Imagem-Ponta-De-Tesoura" />
                        </DivBlade>
                        <PBlade>Perfeita para cortes retos e acabamentos precisos em áreas planas</PBlade>
                    </TypeBlade>

                    <TypeBlade>
                        <DivBlade>
                            <img src="" alt="Imagem-Ponta-De-Tesoura" />
                        </DivBlade>
                        <PBlade>Perfeita para cortes retos e acabamentos precisos em áreas planas</PBlade>
                    </TypeBlade>

                    <TypeBlade>
                        <DivBlade>
                            <img src="" alt="Imagem-Ponta-De-Tesoura" />
                        </DivBlade>
                        <PBlade>Perfeita para cortes retos e acabamentos precisos em áreas planas</PBlade>
                    </TypeBlade>

                    <TypeBlade>
                        <DivBlade>
                            <img src="" alt="Imagem-Ponta-De-Tesoura" />
                        </DivBlade>
                        <PBlade>Perfeita para cortes retos e acabamentos precisos em áreas planas</PBlade>
                    </TypeBlade>
                </BladesTypes>

                <p className="Sec4p">Ao escolher as tesouras certas para cada tarefa no grooming, a precisão e a segurança do corte fazem toda a diferença</p>
            </Section4>

            <Section5>
                <h2>MARCAS <Black>POPULARES</Black></h2>

                <MarksBlade>
                    <div></div>

                    <div></div>

                    <div></div>

                    <div></div>

                    <div></div>
                </MarksBlade>
            </Section5>

            <Section6>
                <Sec6Part1>
                    <BladeTS>
                        <div className="WhitePoint"></div>

                        <DivImageTS>
                            <img src={TsSymbol} alt="imagem-examplo-tesoura" />
                        </DivImageTS>

                        <TitleTS>TOSA COMPLETA</TitleTS>
                        <DescTS>O corpo todo do cão é trabalhado com a tesoura, criando um corte mais personalizado</DescTS>
                    </BladeTS>

                    <BladeTS>
                        <div className="WhitePoint"></div>

                        <DivImageTS>
                            <img src={TsSymbol} alt="imagem-examplo-tesoura" />
                        </DivImageTS>

                        <TitleTS>TOSA DE DESBASTE</TitleTS>
                        <DescTS>Focada na redução do volume do pelo, sem alterar drasticamente o comprimento</DescTS>
                    </BladeTS>

                    <BladeTS>
                        <div className="WhitePoint"></div>

                        <DivImageTS>
                            <img src={TsSymbol} alt="imagem-examplo-tesoura" />
                        </DivImageTS>

                        <TitleTS>TOSA DE ACABAMENTO</TitleTS>
                        <DescTS>Feita para dar os Retoques finais e um acabamento mais limpo e suave após a tosa principal</DescTS>
                    </BladeTS>
                </Sec6Part1>

            </Section6>

            <Section7>
                <SteelDiv>

                    <ImagemTS src={Steel420} alt="" />

                    <SpanSteel>
                        <h2>AÇO 420</h2>

                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo"/> Aço inoxidável econômico com boa resistência à corrosão</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo"/> 50-56 HRC (moderada)</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo"/> Facil de afiar e resistente à ferrugem</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo"/> Custo acessível e facil manutenção, perfeito para iniciantes ou uso leve</p>
                        </div>
                    </SpanSteel>
                </SteelDiv>

                <SteelDiv>

                <SpanSteel>
                        <h2>AÇO 440</h2>

                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo"/> Aço com alta resistência à corrosão a excelente retenção de fio</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo"/> 50-60 HRC (alta durabilidade)</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo"/> Mantém o fio por mais tempo, bom para cortes exigentes</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo"/> Apesar de mais caro e difícil de afiar, é altamente resistente ao desgaste e extremamente durável,
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
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo"/> Aço japonês de alta qualidade, muito afiado e durável</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo"/> 60-62 HRC (excelente durabilidade)</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo"/> É mais frágil devido à dureza elevado, exigindo cuidado para evitar quedas ou torções</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo"/> Corte premium com extrema precisão, ideal para estilização e acabamentos sofísticados</p>
                        </div>
                    </SpanSteel>
                </SteelDiv>

                <SteelDiv>

                <SpanSteel>
                        <h2>AÇO VG-1</h2>

                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo"/> Aço com equilíbrio entre durabilidade e facilidade de afiação</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo"/> 58-60 HRC (alta durabilidade)</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo"/> Mais resistente a impactos devido à dureza não ser tão alta e nem tão baixa</p>
                        </div>
                        <div>
                            <p> <IconParagrafo className="iconP" src={iconP} alt="icone-paragrafo"/> Oferece um equilívrio excelente entre desempenho, durabilidade e facilidade de afiação</p>
                        </div>
                    </SpanSteel>

                    <ImagemTS src={Steelvg1} alt="" />
                </SteelDiv>
            </Section7>

        </General>
    )
}