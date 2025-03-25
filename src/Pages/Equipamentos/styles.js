import styled from "styled-components";
import BackGround1 from '../../assets/imgs/Equipamentos/Background1.png'


export const General = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    position: relative;
`

export const Black = styled.b`
    color: #ffe400;
`

export const Section1 = styled.section`
    background: url('${BackGround1}');
    background-size: cover;
    background-position: center;
    position: relative;
    min-height: 95vh;
    background-color: black;
    width: 100%;
`

export const Sec1Div = styled.div`
    position: absolute;
    bottom: 25%;
    left: 10%;
    width: 450px;
    display: flex;
    flex-direction: column;
    gap: 17px;

    @media (max-width: 480px) {
        width: 95%;
        left: 10px;
        justify-content: center;
        align-items: center;
  }

    h1{
        color: white;
        font-size: 30px;

        @media (max-width: 480px) {
        text-align: center;
        }
    }

    div{
    border: solid 3px white;
    border-radius: 8px;
    height: 50px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
        p{
            color: white;
            font-weight: 600;
        }
    }
`

export const PSec1 = styled.p`
    color: white;
    font-size: 16px;

    @media (max-width: 480px) {
        text-align: center;
        font-size: 18px;
    }
`


export const Section2 = styled.section`
    min-height: 80vh;
    width: 100%;
    background-color: rgb(41, 41, 41);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 10px;
    gap: 50px;
`

export const Sec2Div = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    width: 60%;

    @media (max-width: 480px) {
        flex-wrap: wrap;
        justify-content: center;
        width: 95%;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 15px;

        h2{
            color: #fff17b;
            font-weight: 600;
            font-size: 28px;
        }
        p{
            color: white;
            font-weight: 500;
            font-size: 18px;
        }
    }
`

export const ImgSec2 = styled.img`
    width: 30%;

    @media (max-width: 480px) {
        width: 70%;
    }
`


export const Section3 = styled.section`
    min-height: 90vh;
    width: 100%;
    background-color:rgb(17, 17, 17);
    padding: 60px 10px 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Sec3Title = styled.h2`
    color: #fff38f;
    font-weight: 600;
    text-align: center;
    margin-bottom: 15px;
    font-size: 28px;
`

export const Sec3Desc = styled.p`
    text-align: center;
    color: white;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 80px;
`

export const Sec3Div = styled.div`
    display: flex;
    width: 85%;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;

    @media (max-width: 480px) {
        gap: 70px;
    }
`

export const MachineDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    width: 320px;
    
    h3{
        text-align: center;
        color: #fff38a;
        font-weight: 600;
        font-size: 23px;
    }
    p{
        text-align: center;
        color: white;
        font-size: 15px;
        font-weight: 500;
    }
`

export const DigEquip = styled.div`
    border-radius: 10px;
    height: 380px;
    width: 90%;
    background-color: #242424;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img{
        width: 90%;
    }
`


export const Section4 = styled.section`
    min-height: 80vh;
    width: 100%;
    background-color:rgb(41, 41, 41);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 60px 15px 90px 15px;
`

export const Sec4Title = styled.h1`
    color: white;
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 8px;
`

export const Sec4Desc = styled.p`
    margin-bottom: 70px;
    color: white;
    text-align: center;
`

export const DivMarks = styled.div`
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    width: 65%;
    justify-content: center;
`

export const Mark = styled.div`
    height: 280px;
    width: 220px;
    background-color: #1c1c1c;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;

    .ImageMarkDiv{
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        background-color: #1c1c1c;

        &:hover{
            opacity: 0;
        }

        img{
        width: 90%;

        @media (max-width: 980px) {
        width: 190px;
  }
    }
    }

    .DescMark{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;

        img{
            width: 50%;
        }

        p{
            text-align: center;
            font-size: 14px;
            font-weight: 700;
            width: 95%;
            color: #ffff;
        }
    }
`


export const Section5 = styled.section`
    min-height: 55vh;
    width: 100%;
    background-color: rgb(26, 26, 26);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 60px 10px 70px 10px;

    @media (max-width: 480px) {
        flex-wrap: wrap;
        gap: 80px;
    }

`

export const DivCuidados = styled.div`
    background-color: #323232;
    border-radius: 10px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 235px;
    width: 216px;
    gap: 12px;
    position: relative;

    img{
        position: absolute;
        width: 32%;
        border-radius: 10px;
        top: -38px;
        left: 30px;
    }
`

export const Titlesec5 = styled.p`
    text-align: center;
    color: #ffeb43;
    font-weight: 700;
    font-size: 20px;
`

export const Psec5 = styled.p`
    color: white;
    text-align: center;
    font-weight: 600;
`

