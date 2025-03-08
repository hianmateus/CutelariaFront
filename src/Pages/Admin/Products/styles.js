import styled from "styled-components";

export const General = styled.div`
    min-height: 100vh;
    max-width: 100vw;
`

export const ProductImage = styled.img`
    width: 100px;
    padding: 7px;
    border-radius: 8px;
    background-color: #e9e9e9;
`

export const EditButton = styled.button`
    padding: 5px;
    border-radius: 4px;

    svg{
        font-size: 18px;
        transition: all 0s;
    }

    &:hover{
        background-color:rgb(153, 153, 153);

        svg{
            fill: white;
        }
    }
`

export const InputProducts = styled.input`
    width: 280px;
    height: 40px;
    background-color: white;
    border-radius: 12px;
    position: fixed;
    bottom: 25px;
    right: 25px;
    padding-left: 8px;
    font-size: 16px;
`