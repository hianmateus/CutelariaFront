
import {
    General, Black, Section1, ImageMachines, SpanSec1,
    AboutTosa, AboutMachines, Section2, SpanSec2,
    DivAbout, PSec2, Section3, TitlesSec3, Titles2Sec3, TosaTypes,
    Sec3Machines, TypeMachine, Divbk, Pmachine,
    Sec3Bottom, TitleBotton, SpanBotton, DivCuidados,
    ImgBottom, DivTexts, BTitletexts, Btexts, Section4,
    Sec4Div, Sec4span, Sec4Title, Sec4Texts, ImgSec4
} from "./styles"

import MaquinasSec1 from '../../assets/imgs/Maquinas/Maquinas1.png'
import AboutMachine1 from '../../assets/imgs/Maquinas/AboutMachine1.png'
import AboutMachine2 from '../../assets/imgs/Maquinas/AboutMachine2.png'
import TosaExample1 from '../../assets/imgs/Maquinas/TosaExample1.png'
import TosaExample2 from '../../assets/imgs/Maquinas/TosaExample2.png'
import TosaExample3 from '../../assets/imgs/Maquinas/TosaExample3.png'

import TypeMachine1 from '../../assets/imgs/Maquinas/TypeMachine1.png'
import TypeMachine2 from '../../assets/imgs/Maquinas/TypeMachine2.png'
import TypeMachine3 from '../../assets/imgs/Maquinas/TypeMachine3.png'

import Iconcuidado1 from '../../assets/imgs/Maquinas/Iconcuidado1.png'
import Iconcuidado2 from '../../assets/imgs/Maquinas/Iconcuidado2.png'
import Iconcuidado3 from '../../assets/imgs/Maquinas/Iconcuidado3.png'
import Iconcuidado4 from '../../assets/imgs/Maquinas/Iconcuidado4.png'

import DogExample1 from '../../assets/imgs/Maquinas/DogExample1.png'
import DogExample2 from '../../assets/imgs/Maquinas/DogExample2.png'
import DogExample3 from '../../assets/imgs/Maquinas/DogExample3.png'


export function Maquinas() {
    return (
        <General>
            <Section1>
                <ImageMachines src={MaquinasSec1} />

                <SpanSec1>
                    <h1>AS <Black>MELHORES MAQUINAS</Black> DE TOSA PARA UM PROFISSIONAL</h1>
                    <p>ENTENDA MAIS SOBRE</p>

                    <div>
                        <AboutTosa>Tipos de Tosa</AboutTosa>
                        <AboutMachines>Maquinas Conhecidas</AboutMachines>
                    </div>
                </SpanSec1>
            </Section1>

            <Section2>
                <SpanSec2>
                    <DivAbout>
                        <img src={AboutMachine1} alt="imagem-exemplo-de-maquina" />

                        <h3>USO COMUM</h3>

                        <p>Essas Máquinas são projetadas para realizar a maior parte do trabalho em pelagens densas,
                            longas ou volumosas, e são usadas para tosas gerais em todo o corpo do animal</p>

                    </DivAbout>

                    <DivAbout>
                        <img src={AboutMachine2} alt="imagem-exemplo-de-maquina" />

                        <h3>ACABAMENTO</h3>

                        <p>Máquinas para acabamento são projetadas para trabalhos de precisão, cortes finos e detalhes
                            em áreas sensíveis ou de difícil acesso, como patas, orelhas focinho e região higiênica</p>

                    </DivAbout>
                </SpanSec2>

                <PSec2>Ambos os tipos podem ser complementares para um trabalho profissional e de alta qualidade</PSec2>
            </Section2>

            <Section3>
                <TitlesSec3>
                    <p>APRENDA MAIS SOBRE OS TIPOS DE TOSA</p>
                    <h2>CATEGORIAS DE TOSA</h2>
                </TitlesSec3>

                <TosaTypes>
                    <img src={TosaExample1} alt="exemplo-tosa-imagem" />

                    <div>
                        <h4>Tosa Completa</h4>

                        <p>Remove grande parte do pelo, deixando a pelagem curta e uniforme.
                            Ideal para cães que soltam muito pelo,
                            vivem em climas quentes ou têm pelos que embaraçam facilmente,
                            facilitando a manutenção e evitando o acúmulo de sujeira.</p>
                    </div>
                </TosaTypes>

                <TosaTypes>
                    <img src={TosaExample2} alt="exemplo-tosa-imagem" />

                    <div>
                        <h4>Tosa Higiênica</h4>

                        <p>Foca nas áreas mais sensíveis e propensas e acumular sujeira, como região genital, patas e barriga.
                            É dedicada para manter a higiene do cão, evitando odores e preveninido infecções.
                            A tosa higiênica é comum em cães de qualquer tipo de pelagem e poder ser feita regularmente entre as tosas completas</p>
                    </div>
                </TosaTypes>

                <TosaTypes>
                    <img src={TosaExample3} alt="exemplo-tosa-imagem" />

                    <div>
                        <h4>Tosa Estética</h4>

                        <p>Realça a beleza e as características da raça, modelando o pelo conforme padrões específicos,
                            como em Poodles e Schnauzers. Popular em competições e entre tutores que querem um visual
                            diferenciado para o cão.</p>
                    </div>
                </TosaTypes>


                <Titles2Sec3>
                    <h2>TIPOS DE MÁQUINAS DE TOSA</h2>
                    <p>Máquinas mais conhecidas para melhor Desempenho</p>
                </Titles2Sec3>

                <Sec3Machines>
                    <TypeMachine>
                        <Divbk>
                            <img src={TypeMachine1} alt="maquina-exemplo" />

                            <p>Profíssionais</p>
                        </Divbk>

                        <Pmachine>Máquinas de alto desempenho, projetadas para uso intensivo</Pmachine>
                    </TypeMachine>

                    <TypeMachine>
                    <Divbk>
                            <img src={TypeMachine2} alt="maquina-exemplo" />

                            <p>Semi Profíssionais</p>
                        </Divbk>

                        <Pmachine>Adequadas para tosadores experientes e uso domésticos frequente</Pmachine>
                    </TypeMachine>

                    <TypeMachine>
                    <Divbk>
                            <img src={TypeMachine3} alt="maquina-exemplo" />

                            <p>Acabamento</p>
                        </Divbk>

                        <Pmachine>Projetadas para uso ocasional e Veterinário</Pmachine>
                    </TypeMachine>
                </Sec3Machines>

                <Sec3Bottom>
                    <TitleBotton>ESPECIFICAÇÕES E CUIDADOS PARA MELHOR EFICIÊNCIA</TitleBotton>

                    <SpanBotton>
                        <DivCuidados>
                            <ImgBottom src={Iconcuidado1} alt="imagem-icone-exemplo"/>

                            <DivTexts>
                                <BTitletexts>Limpeza</BTitletexts>
                                <Btexts>Remover pelos e detritos após cada uso ajuda prolongar a vida útil
                                     da máquina e a manter eficiência de corte</Btexts>
                            </DivTexts>
                        </DivCuidados>

                        <DivCuidados>
                            <ImgBottom src={Iconcuidado3} alt="imagem-icone-exemplo" />

                            <DivTexts>
                                <BTitletexts>Redução de Ruido</BTitletexts>
                                <Btexts>Modelos mais recentes são projetados para serem mais silênciosos,
                                     o que amuda a reduzir o estresse dos animais durante a tosa</Btexts>
                            </DivTexts>
                        </DivCuidados>

                        <DivCuidados>
                            <ImgBottom src={Iconcuidado2} alt="imagem-icone-exemplo" />

                            <DivTexts>
                                <BTitletexts>Armazenamento</BTitletexts>
                                <Btexts>Guardar a máquina e os acessórios em locais secos e protegidos evita danos a corrosão</Btexts>
                            </DivTexts>
                        </DivCuidados>

                        <DivCuidados>
                            <ImgBottom src={Iconcuidado4} alt="imagem-icone-exemplo" />

                            <DivTexts>
                                <BTitletexts>Design Ergonômico</BTitletexts>
                                <Btexts>Muitas máquinas modernas são projetadas com foco no conforto do usuário, incorporando características como alças emborrachadas e designs leves</Btexts>
                            </DivTexts>
                        </DivCuidados>
                    </SpanBotton>
                </Sec3Bottom>

            </Section3>

            <Section4>
                <Sec4Div>
                    <Sec4span>
                        <Sec4Title><Black>Prevenção de problemas</Black> de peles e pelo</Sec4Title>
                        <Sec4Texts>A tosa é fundamental para a saúde e bem-estar dos pets, auxiliando na regulação da temperatura,
                            higiene, prevenção de parasitas e facilitando a detecção de problemas de saúde.</Sec4Texts>
                    </Sec4span>

                    <ImgSec4 src={DogExample1} alt="imagem-exemplo-cachorro"/>
                </Sec4Div>

                <Sec4Div>
                    <Sec4span>
                        <Sec4Title><Black>Influência da Máquina</Black> de Tosa na Qualidade</Sec4Title>
                        <Sec4Texts>A escolha da máquina de tosa adequada impacta diretamente a qualidade do processo,
                            influenciando a eficiência, segurança e conforto para o animal e o tosador.</Sec4Texts>
                    </Sec4span>

                    <ImgSec4 src={DogExample2} alt="imagem-exemplo-cachorro"/>
                </Sec4Div>

                <Sec4Div>
                    <Sec4span>
                        <Sec4Title><Black>Considerações na Escolha</Black> da Maquina de Tosa</Sec4Title>
                        <Sec4Texts>Investir em uma máquina de qualidade, com boa potência, lâminas adequadas, design ergonômico e
                            refrigeração eficiente, é essencial para um resultado satisfatório e benéfico para o animal.</Sec4Texts>
                    </Sec4span>

                    <ImgSec4 src={DogExample3} alt="imagem-exemplo-cachorro"/>
                </Sec4Div>
            </Section4>
        </General>
    )
}