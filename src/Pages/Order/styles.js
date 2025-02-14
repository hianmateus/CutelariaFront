import styled from "styled-components";
import Background from '../../assets/imgs/BackgroundLogin2.png'
import { Link as ReactLink } from "react-router-dom";

export const General = styled.div`
    min-height: 120vh;
    max-width: 100vw;
    position: relative;
    background: url('${Background}');
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: contain;
`
export const Banner = styled(ReactLink)`
    display: flex;
    justify-content: center;
    background-color: #151515;
    height: 18vh;
    align-items: center;
    background-position: center;
    width: 100%;

    img{
        max-width: 100%;
        height: 85px;
    }
`

export const Title = styled.h1`
    color: #58ff58;
    text-align: center;
    position: relative;
    border-bottom: solid 5px;
    margin-top: 15px;
    
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;
    padding: 80px;
`

export const Contentpat1 = styled.div`
    display: flex;
    gap: 15px;
    width: 650px;
    flex-direction: column;
`

export const Containerinfo = styled.div`
    height: 350px;
    width: 100%;
    background-color: white;
    border-radius: 15px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0 0 0;
`

export const HeaderTop = styled.div`
    width: 100%;
    background-color: #484848;
    height: 50px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
`

export const TitleHeader = styled.h2`
    color: white;
    font-size: 18px;
    padding-left: 50px;
`

export const DivInfos = styled.div`
    margin-left: 50px;
    margin-top: 20px;
    position: relative;
    width: 500px;
    min-height: 220px;
`

export const InfoLocate = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: absolute;
`

export const Label = styled.label`
    display: flex;
    gap: 5px;
    font-size: 16px;
    font-weight: 600;
`

export const Input = styled.input`
    border: none;
    font-size: 16px;
    padding-left: 10px;
    font-weight: 500;
    width: 350px;

    &:focus{
        background-color: transparent;
    }
`

export const PInput = styled.p`
    border: none;
    font-size: 16px;
    padding-left: 10px;
    font-weight: 500;
    width: 350px;
    color: gray;
`

export const Saveinfo = styled.button`
    cursor: pointer;
    border: none;
    width: 170px;
    font-size: 16px;
    margin-top: 15px;
    font-weight: bold;
    color: #ffdb00;
    background: none;
    border-radius: 4px;
    padding: 3px;
    transition: all 0.2s;

    &:hover{
        text-shadow: 0 0 5px #ffdb00;
    }
    &:active{
        text-shadow: 0 0 1px #ffdb00;
        opacity: 0.6;
    }
`