import styled from "styled-components";
import Background from '../../assets/imgs/Section1/Background1.png'

import { Link as ReactLink } from "react-router-dom";

export const General = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    background-color: black;
    position: relative;
`

export const Section1 = styled.div`
    background: url('${Background}');
    height: 80vh;
    width: 100%;
    background-size: cover;
    background-position: center;

    @media (max-width: 980px) {
        display: flex;
        align-items: center;
        height: 70vh;
        padding-top: 70px;
  }

    div {
        position: absolute;
        top: 150px;
        width: 440px;
        right: 200px;

        @media (max-width: 980px) {
            position: relative;
            right: 0;
            top: 0;
  }

        h1 {
            color: white;
            font-family: "Road Rage", serif;
            text-align: center;
            font-size: 85px;

            @media (max-width: 980px) {
                font-size: 70px;
            }
        }

        p {
            color: white;
            opacity: 0.7;
            text-align: center;
            font-size: 20px;
        }
    }
`

export const Section2 = styled.div`
    width: 100%;
    min-height: 50vh;
    background-color: black;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    padding-bottom: 230px;
`
export const ContainerSec2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Span = styled.div`
    display: flex;
    gap: 200px;
    justify-content: center;
    width: 65%;
    margin-top: 160px;

    @media (max-width: 980px) {
        flex-wrap: wrap;
        width: 85%;
    }
`

export const DivCTLeft = styled.div`
    h2{
        color: white;
        font-size: 27px;
        margin-bottom: 50px;
    }

    div{
        display: flex;

        b{
        color: #ffeb3b;
        }
        p {
        color: gray;
        margin-bottom: 20px;
        font-size: 20px;
        }
    }
   
`

export const DivCTRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;

    h2{
        color: white;
        font-size: 30px;
    }
    b{
        color: #ffeb3b;
    }
    p{
        color: white;
        text-shadow: 0 0 15px #ffeb3b;
        text-align: center;
        font-weight: bold;
        font-size: 20px;

        @media (max-width: 980px) {
            font-size: 18px;
        }
    }

    div {
        display: flex;
        gap: 10px;

        .whatsapp-icon{
            color: white;
            font-size: 45px;
        }

        a{
            cursor: pointer;
            border: none;
            height: 45px;
            width: 190px;
            border-radius: 6px;
            background: linear-gradient(104deg, rgba(0,182,2,1) 0%, rgba(14,255,0,1) 95%);
            font-weight: bold;
            font-size: 16px;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover{
                transform: translateY(-5px);
                box-shadow: 0 0 21px #6bff82;
            }
        }
    }
`


export const Section3 = styled.div`
    width: 100%;
    min-height: 120vh;
    background-color: #353535;
    position: relative;
    padding-bottom: 120px;
`

export const DivTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const TitleSec3 = styled.h1`
    color: white;
    font-size: 57px;
    width: 500px;
    text-align: center;
    line-height: 59px;
    position: relative;
    top: -57px;

    @media (max-width: 980px) {
        font-size: 40px;
    }

    b{
        color: #ffeb3b;
    }

`

export const Divpart1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 150px;
    margin-top: 130px;
`

export const CardsSec3 = styled.div`
    display: flex;
    gap: 50px;

    @media (max-width: 980px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const Card = styled.div`
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 280px;
    min-height: 350px;
    border-radius: 12px;
    padding: 33px 0;
    position: relative;
    justify-content: center;

    .TextWhats{
            color: white;
            text-align: center;
            font-weight: 600;
            text-shadow: 0 0 5px white;
            position: absolute;
            bottom: 30px;
            font-size: 20px;
        }

    div{
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        margin-bottom: 35px;

        h3{
            text-align: center;
            color: white;
            text-shadow: 0 0 8px white;
            font-size: 23px;
            width: 200px;
            line-height: 25px;
        }
        p{
            text-align: center;
            color: white;
            font-weight: 600;
            width: 70%;
        }

    }
`

export const Link = styled(ReactLink)`
    color: white;
    text-shadow: 0 0 5px white;
    cursor: pointer;

    &:hover{
                text-shadow: 0 0 12px white;
            }
`

export const CardBackgrund = styled.div`
    background-color: #00000075;
    width: 100%;
    min-height: 80px;
    justify-content: center;
    position: relative;

    .LinkWhats{
        width: 100px;
        position: absolute;
        height: 105px;
    }

    .IconCard{
        color: white;
        font-size: 110px;
        filter: drop-shadow(0 0 8px white);
        transform: rotate(-12deg);
        position: absolute;
        cursor: pointer;

        &:hover{
            transform: scale(1.1);
        }
    }

    ul{
        display: flex;
        flex-direction: column;

        }
`

export const PgfSec3 = styled.p`
    text-align: center;
    color: #fffdba;
    text-shadow: 0 0 8px #fff700;
    font-size: 20px;
    font-weight: 600;
    width: 600px;

    @media (max-width: 980px) {
        width: 380px;
    }
`

export const Divpart2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 120px;

    h1{
        color: #ffe73b;

        @media (max-width: 980px) {
            font-size: 27px;
        }
    }
`

export const DivSpan = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    span{
        display: flex;
        gap: 120px;

        @media (max-width: 980px) {
            flex-wrap: wrap;
            gap: 0;
            justify-content: center;
        }

        div{
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 50px;
            position: relative;

            .IconSpan{
                font-size: 27px;
                color: #ffe73b;
            }

            p{
                font-weight: 500;
                color: #ffe73b;
                font-size: 18px;
                text-align: center;
            }
        }
    }
`

export const DivMap = styled.div` 
    background-color: black;
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .iMap {
        width: 100%;
        height: 100%;
        border: none; /* Remove qualquer borda padrão */
    }
`;