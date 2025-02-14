import styled from "styled-components";

export const Container = styled.div`

    .carousel-item {
        padding-right: 10px;
        width: 440px !important;

    }
    
    .react-multiple-carousel__arrow{
        z-index: 4;
    }

    .react-multiple-carousel__arrow::before {
    color: #ffeb3b;
    font-weight: bold;
    font-size: 25px;
}
`

export const Title = styled.h1`
    color: #FFEB3B;
    text-align: center;
    font-weight: 500;
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 60px;
    margin-bottom: 80px;
    font-size: 45px;

    &::after{
        content: '';
        width: 130px;
        height: 4px;
        position: absolute;
        bottom: 0;
        left: calc(50% - 65px);
        background-color: #FFEB3B;
    }
`


export const ContainerItens = styled.div`
    background: url('${props => props.$imageUrl}');
    display: flex;
    align-items: center;
    padding: 20px 0 0 50px;
    width: 400px;
    height: 275px;
    background-size: cover;
    background-position: top;
    border-radius: 12px;
    cursor: pointer;
    flex-direction: column;
    align-items: baseline;
    position: relative;

    &:hover{
            transform: scale(1.02);
        }
`

export const ClickDiv = styled.div`
    position: absolute;
    height: 70%;
    width: 52%;
    bottom: 40px;
    left: 90px
`

export const P1 = styled.p`
    color: white;
    font-weight: bold;
    font-size: 25px;
    position: absolute;
    bottom: 60px;
    background-color: #0000007d;
    padding: 3px 25px;
    border-radius: 8px;

    &:hover{
        text-shadow: 0 0 20px rgb(255, 216, 42);
        background-color:rgb(0, 0, 0);
        }
`

