import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

export const ContentResume = styled.div`
    display: flex;
    flex-direction: column;
`

export const GotoOrder = styled.button`
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

export const Container = styled.div`
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    *{
        color: #484848;
        font-weight: 500;
    }

    .container-top {
        margin-bottom: 30px;
        display: grid;
        grid-gap: 10px 20%;
        grid-template-areas:
        'title title'
        'items items-price'
        'delivery-tax delivery-tax-price';

        .title{
            grid-area: title;
           font-size: 20px;
           font-weight: 700;
           margin-bottom: 20px;
           color: white;
           background-color: #484848;
           padding: 12px;
           text-align: center;
           border-top-left-radius: 20px;
           border-top-right-radius: 20px;
        }

        .items{
            grid-area: items;
            padding-left: 20px;
        }

        .items-price{
            grid-area: items-price;
            padding-right: 20px;
        }

        .delivery-tax{
            grid-area: delivery-tax;
            padding-left: 20px;

        }

        .delivery-tax-price{
            grid-area: delivery-tax-price;
            padding-right: 20px;
        }

    }

    .container-bottom{
            display: flex;
            justify-content: space-between;
            padding: 20px;

            p{
                font-size: 20px;
                font-weight: bold;
            }
        }
`

export const BackCart = styled(ReactLink)`
    color: #ffdb00;
    padding-left: 23px;
    margin-top: 25px;
    margin-bottom: 16px;
    font-weight: 600;
    cursor: pointer;
`

export const PixOption = styled.p`
    text-align: center;
    color: #00ff0f;
    font-size: 21px;
    font-weight: 600;
    text-shadow: 0 0 14px;
    cursor: pointer;
    margin-top: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    &:hover{
        transform: translateY(-5px);
        text-shadow: 0 0 16px;
        background: linear-gradient(90deg, rgb(47 99 43) 0%, rgb(30 207 35) 100%);
        border-radius: 8px;
        padding: 4px 0;
        box-shadow: 0 0 17px #008b00;
    }
`