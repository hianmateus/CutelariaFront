import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(0, 0, 0);
    background: linear-gradient(141deg, rgba(0, 0, 0, 1) 0%, rgba(24, 24, 24, 1) 82%, rgba(29, 29, 29, 1) 100%);
    padding: 0 90px 0 70px;
    position: fixed;
    z-index: 5;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    transition: ease 1s;

    @media (max-width: 980px) {
        justify-content: space-around;
        padding: 0;
  }
`

export const ContainerCenter = styled.div`
    display: flex;
    gap: 40px;

    @media (max-width: 980px) {
        display: none;
  }
`

export const Link = styled(ReactLink)`
    color: rgb(255, 255, 255);
    font-weight: 500;
    position: relative;
    opacity: 0.6;
    cursor: pointer;
    font-size: 15px;

    &:hover{
        opacity: 1;
        text-shadow: 0px 0px 11px #ffffff;
        transform: translateY(-5px);
    }

    &::after{
        content: '';
        width: 0;
        height: 3px;
        transition: ease 0.3s;
        background-color: white;
        position: absolute;
        bottom: -38px;
        left: 0;
    }

    &:hover::after {
        width: 100%;
    }
`

export const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const Banner = styled.img`
    width: 170px;
    cursor: pointer;

    @media (max-width: 980px) {
        width: 100px;
  }
`

export const Profile = styled.div`
    display: flex;
    gap: 5px;

    img{
        width: 23px;
        height: 23px;
    }
`
export const Count = styled(ReactLink)`
    color: white;
    font-weight: 600;
    font-size: 13px;
    opacity: 0.8;
    font-weight: bold;

    &:hover{
        opacity: 1;
        text-shadow: 0px 0px 11px #ffffff;
    }
`

export const UserName = styled.p`
    color: #ffc300;
    font-weight: 600;
    margin-left: 4px;
    font-size: 13px;

`

export const Span = styled.div`
    display: flex;

    span{
        color: white;
        font-weight: 600;
        font-size: 13px;

    }
`

export const Sair = styled.p`
   color: red;
   font-weight: 600;
   opacity: 0.8;
   font-size: 13px;

   cursor: pointer;

   &:hover{
        opacity: 2;
        text-shadow: 0px 0px 11px red;
    }
`

export const Pedidos = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 5px;

   div{
    position: relative;
    img{
        width: 27px;
        height: 27px;
    }
   }
`

export const CPedidos = styled.p`
    color: white;
    background-color: orange;
    text-align: center;
    border-radius: 500px;
    position: absolute;
    top: -12px;
    right: -6px;
    width: 19px;
    font-size: 13px;
    font-weight: 600;
`