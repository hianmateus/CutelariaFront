
import { General, Section1, Span1, ButtonM, ButtonC, Section2, DivMarks, MarkInfo, Section3, Section4, Section5, Section6, Section7 } from "./styles"

import MarkPropetz from '../../assets/imgs/Laminas/MarkPropetz.png'
import MarkAndis from '../../assets/imgs/Laminas/MarkAndis.png'
import MarkOster from '../../assets/imgs/Laminas/MarkOster.png'
import MarkWahl from '../../assets/imgs/Laminas/MarkWahl.png'
import MarkPrecision from '../../assets/imgs/Laminas/MarkPrecision.png'

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

            <Section4></Section4>

            <Section5></Section5>

            <Section6>
                <h3>Vantagem das Lâminas de Tosa: Metal vs Cerâmica</h3>

                <p>A escolha das Lâminas depende das preferências do tosador,
                     do tipo de animal e da pelagem. Cuidados adequados garantem
                      desempenho consistente e maior durabilidade</p>
            </Section6>

            <Section7></Section7>


        </General>
    )
}