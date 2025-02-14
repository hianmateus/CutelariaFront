import styled from "styled-components";

export const ContainerButton = styled.button`
    width: 330px;
    height: 50px;
    border-radius: 7px;
    background-color: #e8c700;
    color: white;
    font-size: 20px;
    margin-top: 30px;
    font-weight: bold;
    align-items: center;
    justify-content: center;

    &:hover{
        transform: translateY(-5px);
        box-shadow: 0px 0px 10px #e8c700;
    }
`