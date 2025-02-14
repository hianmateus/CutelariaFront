import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    width: 170px;
    border-radius: 12px;
    border: solid 1px black;
    cursor: pointer;
    justify-content: space-around;

    &:hover{
        transform: translateY(-8px);
    }
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
`

export const Pdinfo = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #29243a;
    text-align: center;
`

export const PdButton = styled.button`
    width: 100%;
    height: 28px;
    border-radius: 5px;
    background-color: #fdc800;
    color: white;
    font-weight: 700;
    font-size: 13px;
    display: flex;
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
