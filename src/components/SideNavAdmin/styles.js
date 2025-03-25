import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #252525;
    align-items: center;

    img {
        width: 60%;
        margin: 40px 0;
        cursor: pointer;
    }
`

export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 20px;
    text-decoration: none;
    color: white;
    font-weight: 500;
    background-color: ${ props => props.$isActive ? '#ffd300' : 'transparent'};

    &:hover {
        background-color:rgb(185, 154, 0);
    }
`

export const Footer = styled.footer`
    width: 100%;
    margin-top: auto;
`
