import styled from "styled-components";

export const General = styled.div`
    width: 100%;
    height: 52px;
    background-color: #1e1e1e;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: white;
        font-weight: 400;
        font-size: 14px;
        text-align: center;

        @media (max-width: 980px) {
            font-size: 10px;
        }
    }

    a{
        color: white;
    }
`