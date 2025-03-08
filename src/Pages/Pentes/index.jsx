
import {
    General, Section1, Section2, Section3,
    Section4, Section5, ButtonSec1, DivSec1,
    H1Sec1, Sec1P, DivSec2, H1Sec2, InfoSec2,
    TextSec2, TitleSec2, DescInfoSec3, DescSec3,
    DivEquip, DivIMG, DivSec3, H1Sec3, PDesc,
    PName, DescProduct, DescTitle, DivSec4,
    ProductDiv, Sec4Equipamento, TitleTop, TitlesSec4,
    DescSec5, DivSec5, InfoContainer, InfoImage,
    PinfoSec5, TitleSec5, TitlesSec5, Black
} from "./styles"

export function Pentes() {
    return (
        <General>
            <Section1>
                <DivSec1>
                    <H1Sec1>Ferramentas <Black>Essenciais para Higiêne</Black> e Bem-Estar</H1Sec1>

                    <Sec1P>Instrumentos que fazem a diferença no Bem-Estar do seu Pet</Sec1P>

                    <ButtonSec1>Veja Mais Sobre</ButtonSec1>
                </DivSec1>
            </Section1>

            <Section2>
                <H1Sec2>Por Que Usar Pentes para Pet?</H1Sec2>

                <DivSec2>
                    <InfoSec2>
                        <TitleSec2>Higiêne Impécavel</TitleSec2>

                        <TextSec2>Previne emaranhados que podem causar desconforto ou irritação</TextSec2>
                    </InfoSec2>

                    <InfoSec2>
                        <TitleSec2>Adeus aos Nós</TitleSec2>

                        <TextSec2>Remove sujeira, pelos mortos e possíveis parasitas com facilidade</TextSec2>
                    </InfoSec2>

                    <InfoSec2>
                        <TitleSec2>Pelagem Radiante</TitleSec2>

                        <TextSec2>Distribui os óleos naturais, deixando o pelo mais brilhante e saudável</TextSec2>
                    </InfoSec2>

                    <InfoSec2>
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
                            <img src="" alt="imagem-exemplo-produto" />
                        </DivIMG>

                        <PName>Dentes Giratórios</PName>
                        <PDesc>Dentes giratórios que reduzem a tração no pelo, tornando a escovação mais confortável</PDesc>
                    </DivEquip>

                    <DivEquip>
                        <DivIMG>
                            <img src="" alt="imagem-exemplo-produto" />
                        </DivIMG>

                        <PName>Dentes Giratórios</PName>
                        <PDesc>Dentes giratórios que reduzem a tração no pelo, tornando a escovação mais confortável</PDesc>
                    </DivEquip>

                    <DivEquip>
                        <DivIMG>
                            <img src="" alt="imagem-exemplo-produto" />
                        </DivIMG>

                        <PName>Dentes Giratórios</PName>
                        <PDesc>Dentes giratórios que reduzem a tração no pelo, tornando a escovação mais confortável</PDesc>
                    </DivEquip>
                </DivSec3>

                <DescInfoSec3>Os pentes são indispensáveis para manter a higiêne, saúde e aparencia do pelo dos animais.
                    Eles vêmem diferentes tipos, tamanhos e matériais, sendo cada um ideal para funções específicas e tipos de pelagem</DescInfoSec3>
            </Section3>

            <Section4>
                <TitlesSec4>
                    <TitleTop>Dentes finos ou Largos?</TitleTop>
                    <DescTitle>Temos o Instrumento Certo para Cada Pelagem</DescTitle>
                </TitlesSec4>

                <DivSec4>
                    <Sec4Equipamento>
                        <ProductDiv>
                            <img src="" alt="" />
                        </ProductDiv>

                        <DescProduct></DescProduct>
                    </Sec4Equipamento>

                    <Sec4Equipamento>
                        <ProductDiv>
                            <img src="" alt="" />
                        </ProductDiv>

                        <DescProduct></DescProduct>
                    </Sec4Equipamento>

                    <Sec4Equipamento>
                        <ProductDiv>
                            <img src="" alt="" />
                        </ProductDiv>

                        <DescProduct></DescProduct>
                    </Sec4Equipamento>
                </DivSec4>
            </Section4>

            <Section5>
                <TitlesSec5>
                    <TitleSec5>Cada pelagem é única</TitleSec5>
                    <DescSec5>Assim como o pente que ela precisa</DescSec5>
                </TitlesSec5>

                <DivSec5>
                    <InfoContainer>
                        <InfoImage>
                            <img src="" alt="Exemplo-Cuidado-Imagem" />
                        </InfoImage>

                        <PinfoSec5>ESCOLHA UM PENTE COMPATÍVEL COM A TEXTURA E O COMPRIMENTO DO PELO DO PET</PinfoSec5>
                    </InfoContainer>

                    <InfoContainer>
                        <InfoImage>
                            <img src="" alt="Exemplo-Cuidado-Imagem" />
                        </InfoImage>

                        <PinfoSec5>DENTES FINOS SÃO MELHORES PARA DETALHES, ENQUANTO OS LARGOS COBREM ÁREAS MAIORES</PinfoSec5>
                    </InfoContainer>

                    <InfoContainer>
                        <InfoImage>
                            <img src="" alt="Exemplo-Cuidado-Imagem" />
                        </InfoImage>

                        <PinfoSec5>PREFIRA MATÉRIAIS DURÁVEIS E SEGUROS, COMO AÇO INOXIDÁVEL PARA OS DENTES</PinfoSec5>
                    </InfoContainer>
                </DivSec5>
            </Section5>
        </General>
    )
}