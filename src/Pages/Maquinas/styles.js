import styled from "styled-components";
import BackGround1 from '../../assets/imgs/Maquinas/BackgroundSec1.png'
import BackgroundDark from '../../assets/imgs/Maquinas/BackgroundDark.png'
import BackgroundDark1 from '../../assets/imgs/Maquinas/BackgroundDark1.png'

export const General = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    position: relative;
`

export const Black = styled.b`
    color: #ffdb00;
`

export const Section1 = styled.div`
    position: relative;
    background: url('${BackGround1}');
    background-size: cover;
    background-position: center;    
    display: flex;
    justify-content: center;
    align-items: end;
    min-height: 85vh;
    gap: 100px;
`

export const ImageMachines = styled.img`
    width: 38%;
`

export const SpanSec1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin-bottom: 150px;

    h1{
        color: white;
        font-weight: 500;
        text-align: start;
        margin-bottom: 20px;
        border-bottom: solid 2px;
    }
    p{
        color: white;
        font-size: 18px;
        margin-bottom: 15px;
    }

    div{
        display: flex;
        gap: 25px;
    }
`

export const AboutTosa = styled.button`
    background: linear-gradient(321deg, rgb(90 90 90) 0%, rgb(192 192 192) 76%);
    width: 180px;
    height: 45px;
    border-radius: 7px;
    font-weight: 600;
    font-size: 14px;
    color: white;
`

export const AboutMachines = styled.button`
    background: linear-gradient(230deg, rgb(255 212 0) 0%, rgb(139 104 0) 76%);
    width: 180px;
    height: 45px;
    border-radius: 7px;
    font-weight: 600;
    font-size: 14px;
    color: white;
`


export const Section2 = styled.div`
    min-height: 100vh;
    background: url('${BackgroundDark1}');
    background-size: cover;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 60px 0;
`

export const SpanSec2 = styled.div`
    display: flex;
    gap: 100px;
`

export const DivAbout = styled.div`
    width: 280px;
    height: 480px;
    background-color: black;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 6px;
    gap: 10px;

    img{
        width: 100%;
    }

    h3{
        color:rgb(255, 213, 0);
        font-weight: 600;
        font-size: 23px;
    }

    p{
    color: white;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    }
`

export const PSec2 = styled.p`
    font-weight: 600;
    font-size: 20px;
    color: #ffbf00;
    width: 40%;
    text-align: center;
    line-height: 25px;
    margin-top: 70px;
`


export const Section3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 5px;
    background-color:rgb(32, 32, 32);
`

export const TitlesSec3 = styled.div`
    margin-bottom: 60px;

    p{
        text-align: center;
        color: #fbbc00;
    }
    h2{
        color: white;
        text-align: center;
        font-weight: 600;
        font-size: 34px;
    }
`

export const TosaTypes = styled.div`
    width: 800px;
    height: 290px;
    background-color: black;
    margin-bottom: 30px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 54%;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;

        h4{
            color: white;
            text-align: center;
            font-weight: 500;
            text-shadow: 0 0 15px;
        }

        p{
            color: white;
            font-size: 14px;
        }
    }
`

export const Titles2Sec3 = styled.div`
    margin-top: 120px;
    margin-bottom: 60px;

    p{
        text-align: center;
        color: #fbbc00;
    }
    h2{
        color: white;
        text-align: center;
        font-weight: 600;
        font-size: 34px;
    }
`

export const Sec3Machines = styled.div`
    display: flex;
    justify-content: center;
    gap: 85px;
    margin-top: 100px;
`

export const TypeMachine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 220px;
    gap: 15px;
`

export const Divbk = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 8px;
    background-color: #363636;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    img{
        position: absolute;
        width: 150px;
        top: -95px;
    }

    p{
        position: absolute;
        bottom: 15px;
        font-weight: 600;
        color: white;
        font-size: 20px;
        text-align: center;
    }
`

export const Pmachine = styled.p`
    text-align: center;
    color: white;
    font-size: 500;
`

export const Sec3Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
`

export const TitleBotton = styled.h2`
    color: white;
`

export const SpanBotton = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    width: 80%;
`

export const DivCuidados = styled.div`
    display: flex;
    align-items: center;
    background-color: #3b3b3b;
    border-radius: 8px;
    width: 450px;
    height: 100px;
    padding: 15px;
    gap: 12px;
`

export const ImgBottom = styled.img`
    width: 15%;
`

export const DivTexts = styled.div``

export const BTitletexts = styled.p`
    color: white;
    font-weight: 700;
    font-size: 18px;
`

export const Btexts = styled.p`
    color: white;
    font-size: 15px;
    line-height: 18px;
    font-weight: 500;
`


export const Section4 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    background: url('${BackgroundDark}');
    background-size: cover;
    background-position: center;
    padding: 120px 0;
`

export const Sec4Div = styled.div`
    display: flex;
    align-items: center;
    background-color: #343434;
    border-radius: 12px;
    width: 750px;
    padding: 15px;
    gap: 25px;
`

export const Sec4span = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 20px;
    width: 60%;
`

export const Sec4Title = styled.p`
    color: white;
    text-align: center;
    font-weight: 700;
    font-size: 23px;
    width: 350px;
    line-height: 25px;
`

export const Sec4Texts = styled.p`
    color: white;
    font-weight: 500;
    font-size: 15px;
    text-align: center;
`

export const ImgSec4 = styled.img`
    width: 40%;
`

