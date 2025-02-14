import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Roboto", sans-serif;
        transition: ease 0.3s;
        text-decoration-line: none;
        font-family: "Poppins", serif;

    }

    button, a {
        cursor: pointer;
        border: none;
    }

`

export default GlobalStyles