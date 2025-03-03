import styled from "styled-components";
import ReactSelect from 'react-select'

export const General = styled.div`
    max-width: 100vw;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #252525;
    border-radius: 15px;
    padding: 35px 0;
    width: 765px;
`

export const TopForm = styled.div`
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 70px;
    row-gap: 15px;
    margin-bottom: 30px;
`

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    color: white;
    font-weight: 600;
`

export const Input = styled.input`
    border-radius: 7px;
    border: none;
    height: 40px;
    width: 250px;
    padding-left: 8px;
    font-size: 13px;
    font-weight: 500;
`

export const InputUpload = styled.label`
    border: 2px dashed white;
    border: 2px dashed white;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 270px;
    border-radius: 7px;
    margin-bottom: 25px;
    cursor: pointer;
    color: white;

    svg {
        width: 20px;
        height: 20px;
        fill: white;
        margin-right: 8px;
    }

    p{
        color: white;
        font-size: 14px;
    }

    input {
        display: none;
    }
`

export const Select = styled(ReactSelect)`
    width: 250px;
`

export const SubmitButton = styled.button`
    margin-top: 20px;
    width: 250px;
    height: 40px;
    border-radius: 7px;
    background-color: #ffd300;
    color: white;
    font-size: 15px;
    font-weight: 700;

    &:hover{
        transform: translateY(-5px);
        box-shadow: 0px 0px 10px #e8c700;
    }
`

export const ErrorMessage = styled.p`
    font-weight: 600;
    font-size: 14px;
    color: red;
`

export const ChekBoxDiv = styled.div`
    margin-bottom: 15px;
    display: flex;
    gap: 10px;
    cursor: pointer;

    input {
        cursor: pointer;
    }
`