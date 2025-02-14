import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

export const ProductImage = styled.img`
    height: 130px;
    width: 130px;
    border-radius: 16px;
`

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        color: #fff;
        border-radius: 4px;
        background-color:rgb(255, 221, 0);
        transition: all 0.4s;
        border: none;

        &:hover{
            background-color: rgb(255, 183, 0);
        }
    }
`

export const EmptyCart = styled.p`
    position: absolute;
    left: 70px;
    top: 100px;
    font-weight: bold;
    font-size: 25px;
    font-family: monospace;
`

export const TotalPrice = styled.p`
    font-weight: bold;
`

export const TrashImage = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
`

export const BackHome = styled(ReactLink)`
    position: absolute;
    right: 18px;
    bottom: 9px;
    font-size: 14px;
    color: #ffdb00;
    cursor: pointer;
    font-weight: bold;
    background-color: black;
    padding: 3px;
    border-radius: 6px;
`