import styled from "styled-components";
import Background from '../../assets/imgs/BackgroundLogin.png'
import Background1 from '../../assets/imgs/BackgroundLogin2.png'
import { Link as ReactLink } from "react-router-dom";

export const General = styled.div`
    height: 100vh;
    max-width: 100vw;
    display: flex;

    @media (max-width: 650px) {
        flex-wrap: wrap;
        justify-content: center;
  }
`

export const ConteinerRight = styled.div`
    width: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('${Background}');
    background-size: cover;

    @media (max-width: 650px) {
        width: 100%;
  }

    img {
        max-width: 100%;
        height: 300px;
        cursor: pointer;

        @media (max-width: 650px) {
        width: 50%;
        }
    }
`

export const ConteinerLeft = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('${Background1}');
    flex-direction: column;
    padding: 0 50px;

    @media (max-width: 650px) {
        width: 100%;
        padding: 0;
        }

    h2{
        color: white;
        margin-bottom: 55px;
        text-align: center;
        width: 420px;
        font-size: 22px;

        @media (max-width: 650px) {
        width: 100%;
        }

        span{
            color: #f0d900;
        }
    }
`

export const Form = styled.form``

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 5px;


    label {
        color: white;
        font-size: 20px;
        font-weight: 500;
    }
    input{
        width: 330px;
        height: 45px;
        border-radius: 7px;
        padding-left: 10px;
        font-size: 16px;

        @media (max-width: 650px) {
        margin-bottom: 0;
        }
    }

    p{
        color: red;
        height: 10px;
    }
`

export const PLink = styled.p`
    color: white;
    margin-top: 15px;
    font-weight: 500;

`

export const Link = styled(ReactLink)`
    color: white;
    text-decoration-line: underline;

    &:hover{
    text-shadow: 0px 0px 8px #ffffff;
    }
`




