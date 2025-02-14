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
