import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 5;
    background-color: #0000006b;    
`

export const General = styled.div`
    width: 900px;
    background-color: white;
    border-radius: 12px;
    z-index: 5;
    display: flex;
    gap: 15px;
    padding: 40px 40px 25px;
    position: relative;
    justify-content: space-between;

    @media (max-width: 450px) {
        height: 90%;
        width: 95%;
        padding: 20px 10px;
        overflow-y: scroll;
        flex-direction: column;
        align-items: center;
        gap: 0;
    }
`

export const OfferBanner = styled.div`
    position: absolute;
    padding: 5px;
    width: 130px;
    border-radius: 8px;
    background: linear-gradient(157deg, rgba(255, 168, 0, 1) 0%, rgba(255, 248, 0, 1) 100%);
    box-shadow: 0 0 20px yellow;
    top: 10px;
    left: -35px;
    transform: rotate(-45deg);
    justify-content: center;
`

export const Offertitle = styled.p`
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 14px;
`

export const ButtonClose = styled.p`
    font-size: 29px;
    color: black;
    font-weight: 500;
    font-family: cursive;
    position: absolute;
    right: 13px;
    top: 2px;
    cursor: pointer;
`

export const StockOff = styled.div`
    position: absolute;
    padding: 8px;
    border: dashed 5px red;
    border-radius: 12px;
    width: 355px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00000017;
    transform: rotate(-10deg);

    p{
        color: red;
        font-weight: bold;
        font-size: 32px;
        text-shadow: 0 0 15px black;
    }
`

export const DivImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    width: 50%;
`

export const ImageProduct = styled.img`
    border-radius: 15px;
    height: 370px;
    max-width: 100%;

    @media (max-width: 450px) {
        height: 365px;
        max-width: 380px;
    }
`

export const Stock = styled.p`
    text-align: center;
    color: gray;
    font-weight: 400;
    font-size: 18px;

    display: none;
`

export const SpanProduct = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    gap: 35px;
    justify-content: center;

    @media (max-width: 450px) {
        width: 100%;
    }
`

export const ProductName = styled.h3`
    color: #13113b;
    font-size: 30px;
    text-transform: uppercase;
    text-align: center;
`

export const DescProduct = styled.div`
background-color: #dedede;
    padding: 15px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    p{
        text-align: center;
        font-weight: 600;
        line-height: 18px;
    }
`

export const PriceProduct = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
`

export const Price = styled.p`
    color: #ffc100;
    font-size: 25px;
    font-weight: 600;
`

export const Pricepix = styled.p`
    font-weight: 600;
    color: #13113b;
`

export const TextPix = styled.p`
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
`

export const DivButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 10px;
`

export const ButtonShop = styled.button`
    height: 47px;
    width: 240px;
    color: white;
    background: linear-gradient(61deg, rgba(79, 0, 148, 1) 36%, rgba(175, 0, 255, 1) 100%);
    border-radius: 8px;
    text-shadow: 0 0 8px white;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        box-shadow: 0 0 15px rgb(207, 104, 255);
        transform: translateY(-5px);
    }

    &:active{
        box-shadow: 0 0 5px rgb(207, 104, 255);
        background: linear-gradient(61deg, rgb(111, 70, 147) 36%, rgb(221, 147, 255) 100%);
    }

    .IconShop{
        font-size: 25px;
        filter: drop-shadow(0 0 5px white);
    }

    @media (max-width: 450px) {
        width: 300px;
        height: 60px;
    }
`

export const ButtonLink = styled.button`
    height: 47px;
    width: 240px;
    color: black;
    border-radius: 8px;
    font-weight: 700;
    background-color: #ffed00;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover{
        box-shadow: 0 0 15px rgb(255, 242, 104);
        transform: translateY(-5px);
    }

    .IconShop{
        width: 12%;
    }

    @media (max-width: 450px) {
        width: 300px;
        height: 60px;
    }
`



