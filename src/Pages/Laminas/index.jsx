
import { General, Section1, Span1, ButtonM,
    ButtonC, Section2, DivMarks, MarkInfo,
    Section3, Section4, Section5, Section6,
    Section7, AboutBlades, TypeBlades,
    BladesCategory, BladeType } from "./styles"

import MarkPropetz from '../../assets/imgs/Laminas/MarkPropetz.png'
import MarkAndis from '../../assets/imgs/Laminas/MarkAndis.png'
import MarkOster from '../../assets/imgs/Laminas/MarkOster.png'
import MarkWahl from '../../assets/imgs/Laminas/MarkWahl.png'
import MarkPrecision from '../../assets/imgs/Laminas/MarkPrecision.png'
import LMimage1 from '../../assets/imgs/Laminas/LMimage2.png'
import LMimage2 from '../../assets/imgs/Laminas/LMimage1.png'
import Blade1 from '../../assets/imgs/Laminas/MetalLamina.png'
import Blade2 from '../../assets/imgs/Laminas/CeramicaLamina.png'
import LaminaParts from '../../assets/imgs/Laminas/LaminaParts.png'
import LaminaAço from '../../assets/imgs/Laminas/LaminadeAço.png'
import LaminaCarbono from '../../assets/imgs/Laminas/LaminadeCarbono.png'
import LaminaCeramica from '../../assets/imgs/Laminas/LaminadeCeramica.png'
import GoldBlade from '../../assets/imgs/Laminas/LMGold.png'


export function Laminas() {
    return (
        <General>
            <Section1>
                <Span1>
                    <h1>LAMINAS DE TOSA MAIS USADAS PARA RESULTADOS IMPECAVEIS</h1>

                    <section>
                        <p>Entenda a diferança entre as Laminas</p>

                        <div>
                            <ButtonM>METAL</ButtonM>
                            <ButtonC>CERÂMICA</ButtonC>
                        </div>
                    </section>
                </Span1>
            </Section1>

            <Section2>
                <h1>MARCAS POPULARES</h1>

                <DivMarks>
                    <MarkInfo>
                        <img src={MarkPropetz} alt="Marca-Propetz" />
                    </MarkInfo>
                    <MarkInfo>
                        <img src={MarkAndis} alt="Marca-Propetz" />
                    </MarkInfo>
                    <MarkInfo>
                        <img src={MarkOster} alt="Marca-Propetz" />
                    </MarkInfo>
                    <MarkInfo>
                        <img src={MarkWahl} alt="Marca-Propetz" />
                    </MarkInfo>
                    <MarkInfo>
                        <img src={MarkPrecision} alt="Marca-Propetz" />
                    </MarkInfo>
                </DivMarks>
            </Section2>

            <Section3>
                <p>As Lâminas de tosa variam em Matérial, Tamanho e Formato, sendo escolhidas
                    conforme o tipo de pelagem e a preferência do tosador. Manter as Lâminas
                    limpas e lubrificadas é essencial para cortes eficazes e maior durabilidade</p>
                <p>A numeração das Lâminas de tosa indica a altura do corte, variando entre marcas
                    que, embora usem números semelhantes, podem diferir em Qualidade, Durabilidade
                    e Características.</p>
            </Section3>

            <Section4>
                <AboutBlades>
                    <h2>MATERIAIS DAS LÂMINAS</h2>

                    <TypeBlades>
                        <div>
                            <img src={LaminaAço} alt="imagem-exmeplo-lamina-de-aço" />

                            <p><span>Aço Inoxidável</span>
                            , Resistente à ferrugem e facil de manter. Ideal para uso prolongado e em ambientes úmidos</p>
                        </div>

                        <div>
                            <img src={LaminaCarbono} alt="imagem-exmeplo-lamina-de-carbono" />

                            <p><span>Aço Carbono</span>, Conhecido por sua durabilidade e capacidade de manter o fio por muito tempo, embora seja mais susvetível</p>
                        </div>

                        <div>
                            <img src={LaminaCeramica} alt="imagem-exmeplo-lamina-de-ceramica" />

                            <p><span>Apenas o Cortante de Ceramica</span>, Extremamente leve, mantém-se afiada por mais tempo e aquece menos, mas é frágil e pode quebrar com facilidade</p>
                        </div>
                    </TypeBlades>
                </AboutBlades>

                <BladesCategory>
                    <BladeType>
                        <div className="BlackPoint"></div>

                        <div>
                            <img src={GoldBlade} alt="imagem-Lamina-Simbolo" />

                            <h3>TOSA DE ACABAMENTO</h3>
                            <p>Estas são projetadas para cortes finos e detalhados,
                                 como contornos de rosto, patas e outras áreas delicadas</p>
                        </div>
                    </BladeType>

                    <BladeType>
                        <div className="BlackPoint"></div>

                        <div>
                            <img src={GoldBlade} alt="imagem-Lamina-Simbolo" />

                            <h3>TOSA DE DESBASTE</h3>
                            <p>Estas são projetadas para cortes finos e detalhados,
                                 como contornos de rosto, patas e outras áreas delicadas</p>
                        </div>
                    </BladeType>

                    <BladeType>
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
                <img src={LaminaParts} alt="Partes-da-Lamina" />

                <div>
                    <span>Remova os pelos das Lâminas após o uso com uma escova macia</span>
                    <span>Aplique óleo nas Lâminas após o uso para garantir cortes suaves e maior durabilidade</span>
                    <span>Guarde as Lâminas em local seco e seguro, longe de quedas e umidade</span>
                </div>
            </Section5>

            <Section6>
                <img src={LMimage1} alt="Imagem-de-Lamina-de-Ceramica" />

                <div>
                    <h3>Vantagem das Lâminas de Tosa: Metal vs Cerâmica</h3>

                    <p>A escolha das Lâminas depende das preferências do tosador,
                        do tipo de animal e da pelagem. Cuidados adequados garantem
                        desempenho consistente e maior durabilidade</p>
                </div>

                <img src={LMimage2} alt="Imagem-de-Lamina-de-Metal" />
            </Section6>

            <Section7>
                <section className="Sec17">
                    <img src={Blade1} alt="" />

                    <div>
                        <p><span className="TileLM">Disponibilidade</span>São amplamente disponíveis e oferecem uma variedade de opções para diferentes necessidades de tosa</p>
                        <p><span className="TileLM">Custo-Efetivas</span>Geralmente são mais acessíveis do que as Lâminas de cerâmica, tornando-se uma opção econômica para tosadores profissionais e amadores</p>
                        <p><span className="TileLM">Robustas e Duráveis</span>Feitas de aço inoxidável ou ligas metálicas, proporcionam uma alta resistência e durabilidade</p>
                        <p><span className="TileLM">Alta Qualidade de Afiação</span>Oferecem cortes precisos e suaves devido à sua qualidade de afiação</p>
                    </div>
                </section>

                <section className="Sec27">
                    <img src={Blade2} alt="" />

                    <div>
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