import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    bottom: 0;
    z-index: 5;
    background-color: #0000006b;
`

export const General = styled.div`
    background-color : white;
    height: 95vh;
    width: 69vw;
    position: fixed;
    bottom: 0;
    z-index: 5;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding: 30px 0 36px 36px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: baseline;

    h1{
        background-color: black;
        color: white;
        padding: 7px;
        font-size: 25px;
        margin-top: 45px;
        margin-bottom: 30px;
        border-radius: 8px;
    }

    @media (max-width: 835px) {
        width: 95%;
        padding: 12px;
    }
`

export const CategoryMenu = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 50px;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 835px) {
        margin-top: 25px;
    }
`

export const CategoryButton = styled.button`
    cursor: pointer;
    border: none;
    color: ${props => props.$isActiveCategory ? 'white' : 'black'};
    background-color: transparent;
    background-color: ${props => props.$isActiveCategory ? 'black' : 'transparent'};
    font-weight: bold;
    padding: 3px;
    font-size: 20px;
    border-radius: 8px;

    &:hover{
        background-color: rgba(0, 0, 0, 0.32);
    }
`

export const ButtonClose = styled.p`
    font-size: 29px;
    color: black;
    font-weight: 500;
    font-family: cursive;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
`

export const ProductsContainer = styled.div`
    display : flex;
    flex-wrap: wrap;
    gap: 30px;

    @media (max-width: 450px) {
        justify-content: center;
    }
`

export const AcessoryContainer = styled.div`
    display : flex;
    flex-wrap: wrap;
    gap: 30px;
`

export const InputProducts = styled.input`
    width: 280px;
    height: 40px;
    background-color: white;
    border-radius: 7px;
    padding-left: 8px;
    font-size: 19px;
    margin-bottom: 25px;
`