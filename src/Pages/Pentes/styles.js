import styled from "styled-components";
import BackGround1 from '../../assets/imgs/Pentes/BackGround1.png'

export const General = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    position: relative;
`
export const Black = styled.b`
    color: #ffdd00;
`

export const Section1 = styled.section`
    background: url('${BackGround1}');
    background-size: cover;
    background-position: top;
    min-height: 75vh;
    width: 100%;
    position: relative;
    background-color: black;
`
export const DivSec1 = styled.div`
    position: absolute;
    bottom: 15%;
    left: 15%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 500px;

    @media (max-width: 650px) {
        width: 390px;
        bottom: 20%;
        left: 5px;
    }
`

export const H1Sec1 = styled.h1`
    color: white;
    font-size: 38px;
    font-weight: 600;

    @media (max-width: 650px) {
        font-size: 28px;
    }
`

export const Sec1P = styled.p`
    color: white;
    font-size: 16px;
    font-weight: 500;
    width: 320px;
    margin-top: 15px;
`

export const ButtonSec1 = styled.button`
    background: transparent;
    border: solid 3px white;
    border-radius: 10px;
    height: 50px;
    width: 200px;
    font-weight: 600;
    color: white;
    text-align: center;
    font-size: 16px;
`


export const Section2 = styled.section`
    min-height: 70vh;
    width: 100%;
    position: relative;
    background-color:rgb(24, 24, 24);
    padding: 50px 0 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const H1Sec2 = styled.h1`
    text-align: center;
    font-weight: 500;
    font-size: 27px;
    color: #ffea89;
    width: 340px;
`

export const DivSec2 = styled.div`
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    gap: 30px;
`

export const InfoSec2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 8px;
    width: 250px;

    img{
        border-radius: 12px;
    }
`

export const TitleSec2 = styled.p`
    color: #ffe900;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
`

export const TextSec2 = styled.p`
    color: white;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
`


export const Section3 = styled.section`
    min-height: 100vh;
    width: 100%;
    position: relative;
    background-color:rgb(45, 45, 45);
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const H1Sec3 = styled.h1`
    color: #ffea89;
    font-weight: 600;
    font-size: 27px;

    @media (max-width: 650px) {
        text-align: center;
    }
`

export const DescSec3 = styled.p`
    font-weight: 500;
    color: white;
    font-size: 18px;
    margin-bottom: 100px;
`

export const DivSec3 = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-bottom: 80px;
`

export const DivEquip = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 260px;
    gap: 8px;
`

export const DivIMG = styled.div`
    width: 215px;
    margin-bottom: 10px;

    img{
        width: 100%;
    border: solid 4px #fee988;
    border-radius: 6px;

    }
`

export const PName = styled.p`
    color: white;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
`

export const PDesc = styled.p`
    text-align: center;
    color: #d8d8d8;
    font-weight: 500;
    font-size: 16px;
`

export const DescInfoSec3 = styled.p`
    text-align: center;
    color: white;
    width: 50%;
    font-size: 18px;
    font-weight: 500;
`


export const Section4 = styled.section`
    min-height: 80vh;
    width: 100%;
    position: relative;
    background-color:rgb(24, 24, 24);
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const TitlesSec4 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const TitleTop = styled.h1`
    text-align: center;
    font-size: 28px;
    color: #feea8f;
    font-weight: 600;
`

export const DescTitle = styled.p`
    text-align: center;
    color: white;
    font-weight: 500;
    font-size: 20px;
`

export const DivSec4 = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 80px;
    flex-wrap: wrap;
    justify-content: center;
`

export const Sec4Equipamento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    min-height: 370px;
    width: 300px;
    gap: 15px;
`

export const EquiTitle = styled.p`
    color: white;
    font-size: 25px;
    font-weight: 500;
    text-shadow: 0 0 20px;
`

export const ProductDiv = styled.div`
    cursor: pointer;
    border-radius: 12px;

    img{
        width: 100%;
        border-radius: 12px;

        &:hover{
            box-shadow: 0 0 18px #ffe900;
        
    }

    }

    &:hover{
        transform: translateY(-15px);
    }
`

export const DescProduct = styled.p`
    color:rgb(255, 246, 146);
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    text-shadow: 0 0 12px;
`


export const Section5 = styled.section`
    min-height: 80vh;
    width: 100%;
    position: relative;
    background-color:rgb(45, 45, 45);
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const TitlesSec5 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const TitleSec5 = styled.h1`
    font-weight: 600;
    font-size: 28px;
    text-align: center;
    color: #ffeb90;
`

export const DescSec5 = styled.p`
    text-align: center;
    color: white;
    font-weight: 500;
`

export const DivSec5 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    width: 90%;
    margin-top: 80px;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 280px;
    gap: 8px;
`

export const InfoImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 100%;
        border-radius: 8px;

    }
`

export const PinfoSec5 = styled.p`
    color: white;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
`


