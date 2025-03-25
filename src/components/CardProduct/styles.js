import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    width: 175px;
    border-radius: 12px;
    border: solid 1px black;
    cursor: pointer;
    justify-content: space-around;

    &:hover{
        transform: translateY(-8px);
    }

    @media (max-width: 450px) {
        width: 150px;
        justify-content: center;
    }
`

export const OfferBanner = styled.div`
    position: absolute;
    padding: 5px;
    width: 102px;
    border-radius: 8px;
    background: linear-gradient(157deg, rgba(255, 168, 0, 1) 0%, rgba(255, 248, 0, 1) 100%);
    box-shadow: 0 0 20px yellow;
    top: 5px;
    left: -60px;
    transform: rotate(-45deg);
    justify-content: center;
    position: relative;

    @media (max-width: 390px) {
        left: -45px;
    }
`

export const StockOff = styled.div`
    position: absolute;
    padding: 5px;
    border: dashed 3px red;
    border-radius: 12px;
    width: 163px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00000017;
    transform: rotate(-10deg);

    p{
        color: red;
        font-weight: bold;
        font-size: 15px;
        text-shadow: 0 0 15px black;
    }
`

export const Offertitle = styled.p`
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 12px;
`

export const DivSpan = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 100%;
`

export const CardImage = styled.img`
    max-width: 80%;

    &:hover{
        transform: scale(1.2);
    }
`

export const PdName = styled.p`
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    line-height: 17px;
    font-size: 16px;
`

export const PdPrice = styled.p`
    color: #fdc800;
    font-weight: 600;
    text-align: center;
    font-size: 16px;

    display: none;
`

export const Pdinfo = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #29243a;
    text-align: center;

    display: none;
`

export const PdButton = styled.button`
    width: 100%;
    height: 28px;
    border-radius: 5px;
    background-color: #fdc800;
    color: white;
    font-weight: 700;
    font-size: 13px;
    display: none;
    align-items: center;
    justify-content: center;
    gap: 3px;
    transition: all 0.1s;

    .IconShop{
        font-size: 20px;
    }

    &:hover{
        transform: translateY(-3px);
        box-shadow: 0 0 21px rgb(255, 211, 107);
    }

    &:active{
        box-shadow: 0 0 2px rgb(255, 211, 107);
        background-color:rgb(255, 235, 161);
    }
`
